import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Directory from './emloyeeDirectory/Directory.jsx';
import Login from './login/Login.jsx';
import EmployeeProfile from './profile/EmployeeProfile.jsx';
import LeaveManagement from './leave Management/LeaveManagement.jsx';
import Payroll from './payroll/Payroll.jsx';
import Connect from './connect/Connect.jsx';
import Attendance from './Attendance/Attendance.jsx';

import ProfilePic from './cropper/Profile.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Room from './connect/Room.jsx';

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/home",
            element: <Dashboard />,
        },
        {
            path: "/directory",
            element: <Directory />,
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
            path: "/room/:roomId",
            element: <Room />
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