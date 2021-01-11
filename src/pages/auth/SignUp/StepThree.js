
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select } from "antd";
import * as Rules from '../../../utils/rules';
const { Option } = Select;
function StepThree({ onSubmit,onBack,loading,initialValues }) {
    const [stepForm] = Form.useForm();
    const validateConfirmPassword = (rule, value, callback) => {
        let pass = stepForm.getFieldValue("password");
        if (pass && value) {
            if (pass !== value) {
                callback("Password not matched");
                return;
            }
        }
        callback();
    };
    return (
        <Form
            name="stepone"
            form={stepForm}
            onFinish={onSubmit}
            initialValues={initialValues}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input type="email" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={Rules.passwordRule(validateConfirmPassword)}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="Confirm Pass:"
                name="confirmPassword"
                rules={Rules.passwordRule(validateConfirmPassword)}
            >
                <Input.Password />
            </Form.Item>
            <span className="mt-2 d-flex w-100 justify-content-around">
                <Button onClick={onBack}>Back</Button>
                <Button
                    htmlType="submit"
                    className="c-button button-with-loading"
                    loading={loading}
                >Finish</Button>
            </span>
        </Form>
    )
}

export default StepThree
