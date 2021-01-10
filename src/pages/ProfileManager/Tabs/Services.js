
import React from 'react'
import { Button, Tabs } from 'antd'
import CServiceList from '../../../components/CServiceList/CServiceList';

const { TabPane } = Tabs;
function Services() {
    return (
        <div className="services-tab">
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Accreditations/Certifications" key="1">
                     <CServiceList buttonTitle="Add New Accreditation/ Certification"/>
                </TabPane>
                <TabPane tab="Awards/ Recognition" key="2">
                <CServiceList buttonTitle="Add New Award/ Recognition"/>
                </TabPane>
                <TabPane tab="Services Offered" key="3">
                <CServiceList buttonTitle="Add New Services Offered"/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Services
