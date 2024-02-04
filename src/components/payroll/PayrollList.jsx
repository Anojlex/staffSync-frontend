import React from 'react'
import { useSelector } from 'react-redux';
import TableData from './TableData';


const PayrollList = ({ openSlip }) => {

    const employees = useSelector((state) => state.employee.data) || [];



    return (
        <div className='bg-[#f4f3f9] h-[780px] sm:ml-60 rounded-sm flex-col p-8 mt-6 pt-12 '>

            <div className='bg-white rounded-sm flex-col h-[700px] mt-6 rounded-t-3xl text-[#64728c] shadow-md '>
                <div className='bg-white h-24 rounded-t-3xl text-sm  text-[#64728c] p-6'>


                    <div className='hidden sm:flex items-center bg-slate-300 h-14  text-xs font-sans-regular rounded-t-md text-[#506181] '>
                        <div className='flex-1 px-3 text-center'>Employee Name</div>
                        <div className='flex-1 px-3 text-center'>Emp ID</div>
                        <div className='flex-1 px-3 text-center'>Total Earnings</div>
                        <div className='flex-1 px-3 text-center'>Total Deductions</div>
                        <div className='flex-1 px-3 text-center'>Net Salary</div>
                        <div className='flex-1 px-3 text-center'>Action</div>

                    </div>
                    <div className='overflow-y-auto max-h-[calc(100vh-14rem)] bg-white' >

                        {employees.map((employee, index) => (

                            <TableData employee={employee} openSlip={openSlip} />
                        ))}

                    </div>

                </div>
            </div>

        </div >

    )

}

export default PayrollList