import React from 'react'
import SideBar from '../components/sidebar'
import Header from '../components/header'
import {
    Outlet
} from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className=''>

            <SideBar />
            <div className='dash-main'>
                <Header />
                <Outlet />

            </div>
        </div>
    )
}

export default DashboardLayout
