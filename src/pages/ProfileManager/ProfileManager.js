import React from 'react'
import { Tabs } from 'antd';
import BuisnessInformation from './Tabs/BuisnessInformation';

const { TabPane } = Tabs;
function ProfileManager() {
    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Business Information" key="1">
                <BuisnessInformation />
            </TabPane>
            <TabPane tab="Services" key="2">
                Services
             </TabPane>
            <TabPane tab="Photos/Media" key="3">
                Photos/Media
             </TabPane>
            <TabPane tab="Staff/Contractors" key="4">
                Staff/Contractors
             </TabPane>
            <TabPane tab="Facilities/Resources" key="5">
                Facilities/Resources
             </TabPane>
        </Tabs>
    )
}

export default ProfileManager
