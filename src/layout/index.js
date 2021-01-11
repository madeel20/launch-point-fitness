import React, { useEffect } from 'react'
import { Layout } from 'antd';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { DashboardRoutes } from '../routes/index';
import CSidebar from '../components/CSidebar/CSidebar';
import './index.scss'
import {Spin} from "antd";
import CHeader from '../components/CHeader/CHeader';
import { getUserData } from '../store/Actions/UsersActions';
import { useDispatch, useSelector } from 'react-redux';
function LayoutWrap() {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    }, []);
    const stateProps = useSelector(state => state.User);
    const { data, loading } = stateProps;
    return (
        <Spin spinning={loading}>
            <div className="c-layout">
                <CHeader currentPageName={DashboardRoutes.find(it => it.path === location.pathname)?.title} buisnessName={data?.buisnessName} />
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
                            <Redirect from="*" to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default LayoutWrap