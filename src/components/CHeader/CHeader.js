import React from 'react'
import { SettingOutlined, AntCloudOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

function CHeader() {
    return (
        <div className="c-header">
            <div className="first-header">
                <h1 className="title">Launch Point Fitness</h1>
                <div className="options-container">
                    <SettingOutlined />
                    <AntCloudOutlined />
                    <BellOutlined />
                    <Badge dot>
                        <Avatar shape="square" size="small" icon={<UserOutlined />} />
                    </Badge>
                </div>
            </div>
            <div className="second-header">
                <div className="first-inner-container"><h1 className="title">Fitness Pro</h1></div>
                <div className="second-inner-container">
                <h1 className="title">Social Marketing Center</h1>
                <h1 className="title">KAVA YOGA</h1>
                </div>
            </div>
        </div>

    )
}

export default CHeader
