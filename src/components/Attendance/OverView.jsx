import React from 'react'
import { useSelector } from 'react-redux'

const OverView = ({ attendance }) => {
    const employee = useSelector((state) => state.employee.data) || [];
    const leaveRequests = useSelector((state) => state.leave.data) || [];

    const today = new Date();
    today.setHours(0, 0, 0, 0); // to ignore time part of the date

    const todayLeaveRequests = leaveRequests.filter((leave) => {
        const fromDate = new Date(leave.fromDate);
        fromDate.setHours(0, 0, 0, 0);

        const toDate = new Date(leave.toDate);
        toDate.setHours(0, 0, 0, 0);

        const appliedDate = new Date(leave.date);
        appliedDate.setHours(0, 0, 0, 0);

        const isApproved = leave.status === 'Approved';

        const isWithinDateRange = today >= fromDate && today <= toDate;

        const isBeforeAppliedDate = appliedDate < today;

        return isApproved && isWithinDateRange && isBeforeAppliedDate;
    });

    const numberOfApprovedLeavesToday = todayLeaveRequests?.length;


    const unplannedLeave = attendance?.absent?.length - numberOfApprovedLeavesToday;


    return (
        <div className='w-full h-40 bg-white mt-5 flex-col p-1 rounded-md text-[#64728c]'>
            <div className='ml-3 p-3 '>Attendance</div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='w-full h-30 bg-white  flex flex-wrap justify-center  items-center text-sm'>
                    <div className='w-56 h-12 bg-slate-100 text-center  rounded-l-3xl border border-[#64728c55] p-1 '>
                        <p>Today Present</p>
                        <p>{attendance?.present?.length} / {employee.length}</p>
                    </div>
                    <div className='w-56 h-12 bg-slate-100 text-center border border-[#64728c55] p-1'>
                        <p>Planned leave</p>
                        <p>{numberOfApprovedLeavesToday}</p>
                    </div>
                    <div className='w-56 h-12 bg-slate-100 text-center border border-[#64728c55] rounded-r-3xl p-1'>
                        <p>Unplanned leave</p>
                        <p>{unplannedLeave < 0 ? 0 : unplannedLeave}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OverView