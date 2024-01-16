import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
const Payroll = () => {
    return (
        <>  <Header />
            <Sidebar active={"payroll"} />
        </>
    )
}

export default Payroll