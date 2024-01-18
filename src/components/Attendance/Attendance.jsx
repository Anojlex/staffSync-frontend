import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import AttendanceContainer from './AttendanceContainer'
const Attendance = () => {
    return (
        <>  <Header />
            <Sidebar active={"attendance"} />
            <AttendanceContainer />
        </>
    )
}

export default Attendance