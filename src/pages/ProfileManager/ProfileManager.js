import React from 'react'
import { Tabs } from 'antd';
import BuisnessInformation from './Tabs/BuisnessInformation';
import Services from './Tabs/Services';
import CMediaContainer from '../../components/CMediaContainer/CMediaContainer';

const { TabPane } = Tabs;
function ProfileManager() {
    return (
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Business Information" key="1">
                <BuisnessInformation />
            </TabPane>
            <TabPane tab="Services" key="2">
                <Services/>
             </TabPane>
            <TabPane tab="Photos/Media" key="3">
            <CMediaContainer label="Photos:" buttonLabel="Add New Photo"/>
            <CMediaContainer label="Media" buttonLabel="Add New Media"/>
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
