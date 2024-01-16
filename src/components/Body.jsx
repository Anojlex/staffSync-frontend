import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './dashboard/Dashboard.jsx';
import Login from './login/Login.jsx';
import EmployeeProfile from './profile/EmployeeProfile.jsx';
import LeaveManagement from './leave Management/LeaveManagement.jsx';
import Payroll from './Payroll.jsx';
import Connect from './Connect.jsx';
import Attendance from './Attendance.jsx';

import ProfilePic from './cropper/Profile.jsx';

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/home",
            element: <Dashboard />,
        },
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/empDetail/:employeeId",
            element: <EmployeeProfile />
        }
        , {
            path: "/attendance",
            element: <Attendance />
        },
        {
            path: "/leave",
            element: <LeaveManagement />
        }, {
            path: "/payroll",
            element: <Payroll />
        },
        {
            path: "/connect",
            element: <Connect />
        },
        {
            path: "/profilepic",
            element: <ProfilePic />
        }

    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}


export default Body