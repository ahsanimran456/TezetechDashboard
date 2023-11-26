import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { FaBars, FaListAlt, FaUserCog } from 'react-icons/fa';
import { NavLink, } from 'react-router-dom';
import { FiTable } from "react-icons/fi";

// import config from "../services/config.json";
// import { PermissionsContext } from '../Context/AccessPermissionContext';
// import SideBarLoader from './MaindashboardCom/LeftsidbarLoader';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };

}
function LeftSideBar() {
    const [openKeys, setOpenKeys] = useState([]);
    const [width, setwidth] = useState();
    const rootSubmenuKeys = ['sub0', 'sub1', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11', 'sub12', 'sub13', 'sub14', 'sub15', 'sub16', 'sub17'];

    // const HandleResponsive = () => {

    // }
    const onOpenChange = (keys) => {
        // console.log("ketyasd", keys);
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    useEffect(() => {
        const currentLocation = window.location.pathname
        if (currentLocation === `user/create` || currentLocation === `user/list` || currentLocation === `user/profile`) {
            setOpenKeys(["sub1"])
        }
    }, []);


    // const UserManagement = (getItem('User Management', 'sub1', <FaUserCog />,
    //     [
    //         getItem(<NavLink
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "ActiveModuleSub" : ""
    //             } to={`user/list`}><BsReverseListColumnsReverse /> User List</NavLink>, 'p1423sa')
    //         ,
    //         getItem(<NavLink
    //             className={({ isActive, isPending }) =>
    //                 isPending ? "pending" : isActive ? "ActiveModuleSub" : ""
    //             }
    //             to={`/user/create`}><BiUserPlus /> Create User</NavLink>, 'p1423433sa')
    //     ]
    // ))

    const Createuser = getItem(<NavLink
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "ActiveModuleSub" : ""
        } to={`user/create`}><FaListAlt />  User Form</NavLink>, 'sub0')

    const listuser = getItem(<NavLink
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "ActiveModuleSub" : ""
        } to={`user/list`}><FiTable /> User Table</NavLink>, 'sub1')


    const items = [
        Createuser,
        listuser
    ]

    return (
        <>
            <div className="sidebar">
                <ul className="sidebarmenu" style={{ padding: 0, margin: 0 }}>

                    <div
                        style={{
                            width: 280,
                            height: "100%",
                            background: "#fff"
                        }}
                    >
                        <div className='py-3 ps-2' >
                            <FaBars />
                        </div>
                        < Menu
                            defaultSelectedKeys={['sub0']}
                            defaultOpenKeys={['sub0']}
                            mode="inline"
                            theme="light"
                            items={items}
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                        />
                    </div>
                </ul>
            </div>
        </>
    )
}

export default LeftSideBar