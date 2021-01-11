
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, DatePicker, Upload, Spin, InputNumber, Select, message } from "antd";
import sampleImage from '../../../assets/images/Cindy Zackney Yoga Logo.png';
import * as Rules from '../../../utils/rules';
import { auth, firestore } from '../../../firebase/index'
import { UploadOutlined } from '@ant-design/icons';
import { MappedElement } from '../../../utils/helpers';
import { states } from '../../../utils/Constants';
const { Option } = Select;
function StepOne({ onSubmit,initialValues }) {
    return (
        <Form
            name="step-one"
            onFinish={onSubmit}
            initialValues={initialValues}
        >
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
                        <Select size={"small"}  style={{ width: 200 }}>
                            <Option value="">Select State</Option>
                            {states.map(state => <Option value={state}>{state}</Option>)}
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
            <span className="mt-2 d-flex w-100 justify-content-around">
                <Button
                    htmlType="submit"
                >Next</Button>
            </span>
        </Form>
    )
}

export default StepOne
