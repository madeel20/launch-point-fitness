import React from 'react'
import { Button, Form, Input, DatePicker, Upload, Spin, InputNumber, Select } from "antd";
import sampleImage from '../../../assets/images/Cindy Zackney Yoga Logo.png';
import * as Rules from '../../../utils/rules';
const { Option } = Select;

function BuisnessInformation() {
    return (
        <Form
            name="profile_update"
            className="h-100 d-flex flex-column"
            initialValues={{

            }}
            // onFinish={onFinish}
            className="buisness-info-form"
        >
            <div className="first-container">
                <Form.Item label="Name" name="firstName" className="" rules={Rules.firstName}>
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
                            <Select size={"small"} defaultValue="" style={{ width: 200 }}>
                                <Option value="">State</Option>
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
                         <img className="logo" src={sampleImage} />
                </Form.Item>
                <Form.Item label="Website" name="website" className="" >
                <Input maxLength="40" placeholder="Website" />
                </Form.Item>
                <Form.Item name="amenities" label="Amenities">
                    <Input.TextArea placeholder="Amenities" />
                </Form.Item>
            </div>
        </Form>
    )
}

export default BuisnessInformation
