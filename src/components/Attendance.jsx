import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
const Attendance = () => {
    return (
        <>  <Header />
            <Sidebar active={"attendance"} />
        </>
    )
}

export default Attendance