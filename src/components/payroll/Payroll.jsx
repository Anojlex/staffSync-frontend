import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import PayrollList from './PayrollList'
import Payslip from './Payslip'
import { useState } from 'react'

const Payroll = () => {
    const [open, setOpen] = useState(true)
    const [salary, setSalary] = useState({})
    const [employee, setEmployee] = useState({})

    const openSlip = (employee, salary) => {
        setOpen(true)
        setSalary(salary)
        setEmployee(employee)
    }
    const closeSlip = () => {
        setOpen(false)
    }

    return (
        <>  <Header />
            <Sidebar active={"payroll"} />
            <PayrollList openSlip={openSlip} />
            <Payslip open={open} closeSlip={closeSlip} employee={employee} salary={salary} />
        </>
    )
}

export default Payroll