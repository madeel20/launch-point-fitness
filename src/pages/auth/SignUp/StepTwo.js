
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, DatePicker, Upload, Spin, InputNumber, Select, message } from "antd";
import sampleImage from '../../../assets/images/Cindy Zackney Yoga Logo.png';
import * as Rules from '../../../utils/rules';
import { auth, firestore } from '../../../firebase/index'
import { UploadOutlined } from '@ant-design/icons';
import { MappedElement } from '../../../utils/helpers';
import { states } from '../../../utils/Constants';
const { Option } = Select;
function StepTwo({ onSubmit, onBack, initialValues}) {
    const [fileList, updateFileList] = useState([]);
    const fileUploaderProps = {
        fileList,
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png';
        },
        onChange: info => {
            // file.status is empty when beforeUpload return false
            updateFileList(info.fileList.filter(file => !!file.status));
        },
    };
    return (
        <Form
            name="step-one"
            onFinish={onSubmit}
            initialValues={initialValues}
        >
            <Form.Item label="Logo" name="logo" className="" >
                <Upload {...fileUploaderProps} maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload png only</Button>
                </Upload>
            </Form.Item>
            <Form.Item label="Website" name="website" className="" >
                <Input maxLength="40" placeholder="Website" />
            </Form.Item>
            <Form.Item name="amenities" label="Amenities">
                <Input.TextArea placeholder="Amenities" />
            </Form.Item>
            <span className="mt-2 d-flex w-100 justify-content-around">
                <Button onClick={onBack}>Back</Button>
                <Button
                    htmlType="submit"
                    className="c-button button-with-loading"
                >Next</Button>
            </span>
        </Form>
    )
}

export default StepTwo
