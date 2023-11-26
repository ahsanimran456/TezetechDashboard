import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import LeftSideBar from './LeftSideBar';
import { FaBars, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiTable } from "react-icons/fi";
const AppDrawer = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='drawer-header'>
                {/* <Button type="primary" >
                    Open
                </Button> */}
                <FaBars onClick={showDrawer} />
            </div>
            <Drawer
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                width="250px"
            >
                <ul className='p-0 drwalerlist'>
                    <li>
                        <Link to="/user/create"><FaListAlt /> User Form</Link>
                    </li>
                    <li>
                        <Link to="/user/list"><FiTable  /> User Table</Link>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};
export default AppDrawer;