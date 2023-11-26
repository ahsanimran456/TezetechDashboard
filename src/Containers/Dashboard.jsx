import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import CreateUser from './CreateUser'
import { Route, Routes } from 'react-router-dom'
import Userlist from './UserList'
import AppDrawer from '../Components/Drawer'

function Dashboard() {
    return (
        <div className='main'>
            <div className='left'>
                <LeftSideBar />
            </div>
            <div className='sm-d'>
                <AppDrawer />
            </div>
            <div className='main_content'>
                <Routes>
                    <Route path="/*" element={<CreateUser />} />
                    <Route path="/user/create" element={<CreateUser />} />
                    <Route path="/user/list" element={<Userlist />} />
                </Routes>
            </div>
        </div>
        // <LeftSideBar />
    )
}

export default Dashboard