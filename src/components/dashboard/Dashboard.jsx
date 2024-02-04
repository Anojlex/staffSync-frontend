import React from 'react'
import Header from '../header/Header.jsx'
import Sidebar from '../sidebar/Sidebar.jsx'
import DashboardContainer from './DashboardContainer.jsx'
const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar active={"dashboard"} />
            <DashboardContainer />

        </>
    )
}

export default Dashboard