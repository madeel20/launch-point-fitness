import React from 'react'
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DashboardRoutes } from '../routes/index';
import CSidebar from '../components/CSidebar/CSidebar';
import './index.scss'

import CHeader from '../components/CHeader/CHeader';
function index() {
    return (
            <div className="c-layout">
                <CHeader>Header</CHeader>
                <div className="inner-container">
                    <CSidebar routes={DashboardRoutes} />
                    <div className="content">
                        <Switch>
                            {DashboardRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            ))}
                            {/* <Redirect from="/" to="/dashboard" /> */}
                            <Route
                                path="*"
                                render={() => (
                                    <div>
                                        <h1>Not Found</h1>
                                    </div>
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
    )
}

export default index