import React from 'react'
import SideBar from '../components/sidebar'
import Header from '../components/header'
import {
    Navigate,
    Outlet
} from "react-router-dom";

const DashboardLayout = () => {
    const isToken = localStorage.getItem("token")
    return (
        <div className=''>

            <SideBar />
            <div className='dash-main'>
                <Header />
                {isToken ? <Outlet /> : <Navigate to="/admin-login" />}

            </div>
        </div>
    )
}

export default DashboardLayout
