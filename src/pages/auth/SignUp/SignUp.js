import React, { useEffect, useState } from 'react'
import { Button, Form, Input, DatePicker, Upload, Spin, InputNumber, Select, message, Alert } from "antd";
import sampleImage from '../../../assets/images/Cindy Zackney Yoga Logo.png';
import * as Rules from '../../../utils/rules';
import { auth, firestore, storage } from '../../../firebase/index'
import { UploadOutlined } from '@ant-design/icons';
import { cleanPayload, MappedElement } from '../../../utils/helpers';
import { states } from '../../../utils/Constants';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import { getCollectionByField } from '../../../firebase/helpers';
const { Option } = Select;

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [step, setStep] = useState(0);
    const [payload, setPayload] = useState({state:""});
    useEffect(() => {
        setError('');
    }, [payload])

    const onStepSubmit = (values) => {
        setPayload(prevValue => { return { ...prevValue, ...values } });
        setStep(prevValue => prevValue + 1)

    };
    const handleSubmit = async (values) => {
        let data = { ...payload, email: values.email };
        delete data.logo
        delete data.password
        delete data.confirmPassword
        data = cleanPayload(data);
        setLoading(true);
        let usersRecord = await getCollectionByField('users', 'email', data.email);
        if (usersRecord.length > 0) {
            setError('A user is already registered with this email!');
            return;
        }
        try {
            let fireBaseUrl = '';
            if (payload && payload.logo && payload.logo.file && payload.logo.file.originFileObj) {
                await storage.ref(`/images/${data.email}_logo`).put(payload.logo.file.originFileObj);
                fireBaseUrl = await storage.ref(`/images/${data.email}_logo`).getDownloadURL();
            }
            auth.createUserWithEmailAndPassword(data.email, values.password).then(async parentRes => {
                await firestore.collection('users').doc(parentRes.user.uid).set({ ...data, logoUrl: fireBaseUrl });
            }).catch(err => {
                setError(err.message)
                setLoading(false);
            });
        } catch (err) {
            setError(err.message)
            setLoading(false);
        }
    };
    const onStepBack = () => setStep(prevValue => prevValue - 1);
    const getCurrentSteps = () => {
        switch (step) {
            case 0:
                return <StepOne onSubmit={onStepSubmit} initialValues={payload} />;
            case 1:
                return <StepTwo onBack={onStepBack} initialValues={payload} onSubmit={onStepSubmit} />;
            case 2:
                return <StepThree onBack={onStepBack} initialValues={payload} onSubmit={handleSubmit} loading={loading} />;
            default:
                return ''
        }
    }

    return (
        <div className="auth-container d-flex justify-content-center align-items-center w-100 ">
            <div
                name="profile_update"
                className="bordered-container inner-container"
            >
                <h3>Register</h3>
                <hr />
                {getCurrentSteps()}
                {error && <Alert className="mt-2" message={error} type="error" />}
            </div>
        </div>
    )
}
