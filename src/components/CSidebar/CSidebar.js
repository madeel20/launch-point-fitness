import { Menu } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
function CSidebar({ routes }) {
    return (
        <div className="c-sidebar">
            {routes.map((menu, index) => {
                return (
                    <Link
                        key={index}
                        // onClick={close}
                        to={menu.path}
                        className="c-menu-item"
                    // className={`${checkActiveClass(currentPathName, menu.path)}`}
                    >
                        {/* {menu.icon ? <img src={menu.icon} alt="" /> : null} */}
                        <p className="title">{menu.title}</p>
                    </Link>
                );
            })}
        </div>
      
    )
}

export default CSidebar
