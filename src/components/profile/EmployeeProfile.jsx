import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Profile from './Profile.jsx'
import { useParams } from 'react-router-dom';

import { useState } from 'react';

const EmployeeProfile = () => {
    const { employeeId } = useParams();
    const [open, setOpen] = useState(false)

    const openForm = () => {
        setOpen(true)
    }
    const closeForm = () => {
        setOpen(false)
    }
    return (
        <>
            <Header />
            <Sidebar active={"dashboard"} />
            <Profile employeeId={employeeId} openForm={openForm} />

        </>
    )
}

export default EmployeeProfile