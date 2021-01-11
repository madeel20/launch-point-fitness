import React, { useEffect } from 'react'
import {  Form, Input, Spin, InputNumber, Select } from "antd";
import * as Rules from '../../../utils/rules';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../store/Actions/UsersActions';
import { states } from '../../../utils/Constants';
const { Option } = Select;

function BuisnessInformation() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    }, [])
    const stateProps = useSelector(state => state.User);
    const {data ,  loading} = stateProps;
    return (
        // <Spin spinning={loading}>
        <Form
            name="profile_update"
            className="h-100 d-flex flex-column"
            initialValues={{
                Description: data?.Description,
                address:data?.address,
                amenities: data?.amenities,
                city: data?.city,
                contact: data?.contact,
                email: data?.email,
                buisnessName: data?.buisnessName,
                logoUrl: data?.logoUrl,
                phone: data?.phone,
                state: data?.state,
                suite: data?.suite,
                website: data?.website,
                zip: data?.zip
            }}
            // onFinish={onFinish}
            className="buisness-info-form"
        >
            <div className="first-container">
                <Form.Item label="Name" name="buisnessName" className="" rules={Rules.firstName}>
                    <Input maxLength="40" placeholder="Name" />
                </Form.Item>
                <Form.Item label="Address" name="address" className="" >
                    <Input maxLength="40" placeholder="Address" />
                </Form.Item>
                <div className="sub-fields">
                    <Form.Item label="Suite" name="suite" className="" >
                        <InputNumber min={1} placeholder="Suite" />
                    </Form.Item>
                    <Form.Item label="City" name="city" className="" >
                        <Input maxLength="40" placeholder="City" />
                    </Form.Item>
                    <div className="same-row-fields">
                        <Form.Item label="State" name="state" className="" >
                            <Select size={"small"} style={{ width: 200 }}>
                            <Option value="">Select State</Option>
                            {states.map(state => <Option key={state} value={state}>{state}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Zip" name="zip"  >
                            <Input maxLength="10" className="zip-input" placeholder="Zip" />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item label="Phone" name="phone" className="" >
                    <Input maxLength="40" placeholder="Phone" />
                </Form.Item>
                <Form.Item label="Contact" name="contact" className="" >
                    <Input maxLength="40" placeholder="Contact" />
                </Form.Item>
                <Form.Item name="Description" label="Description">
                    <Input.TextArea placeholder="Description" />
                </Form.Item>
            </div>
            <div className="second-container">
                <Form.Item label="Logo" name="logo" className="" >
                    <img className="logo" src={data?.logoUrl} />
                </Form.Item>
                <Form.Item label="Website" name="website" className="" >
                    <Input maxLength="40" placeholder="Website" />
                </Form.Item>
                <Form.Item name="amenities" label="Amenities">
                    <Input.TextArea placeholder="Amenities" />
                </Form.Item>
            </div>
        </Form>
        // </Spin>
    )
}

export default BuisnessInformation
