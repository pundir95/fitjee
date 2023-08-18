import React from 'react'
import {
    Navigate,
    Outlet
} from "react-router-dom";

const PublicRoute = () => {
    const isToken = localStorage.getItem("token")
    return (
        <div>
            {!isToken ? <Outlet /> : <Navigate to="/" />}
        </div>
    )
}

export default PublicRoute
