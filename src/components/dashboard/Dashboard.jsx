import React, { useState } from 'react'
import Header from '../header/Header.jsx'
import Sidebar from '../sidebar/Sidebar.jsx'
import CardContainer from './CardContainer.jsx'
import AddEmployeeForm from './AddEmployeeForm.jsx'

const Dashboard = () => {
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
            <CardContainer openForm={openForm} />
            <AddEmployeeForm closeForm={closeForm} open={open} />
        </>
    )
}

export default Dashboard