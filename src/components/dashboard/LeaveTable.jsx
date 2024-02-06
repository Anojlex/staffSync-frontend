
import React, { useState } from 'react';


const LeaveTable = ({ id, comment, setOpen, setAction, setLeaveId, setComment, leave }) => {


    const rejectLeave = () => {
        setAction("Reject")
        setLeaveId(id)
        setComment(leave.comment)
        setOpen(true)
        console.log("clicked");

    }
    const approveLeave = () => {
        setAction("Approve")
        setComment(leave.comment)
        setLeaveId(id)
        setOpen(true)

    }
    const isRejected = leave.status === 'Rejected';
    const isApproved = leave.status === 'Approved';
    return (
        < div className='    border-b  h-12 m-3 py-2 bg-slate-200 text-xs font-normal rounded-xl flex ' >

            < div className='flex-1 px-1  sm:text-center '>{`${leave.employeeId.firstname} ${leave.employeeId.lastname}`}</div >
            <div className='flex-1 px-1 sm:text-center'>{leave.leaveType}</div>

            <div className='flex-1 px-1 sm:text-center'>{2}</div>
            <div className='flex-1 px-1 sm:text-center'>{leave.reason}</div>

            <div className='flex-1 px-3 sm:text-center '>{leave.status}</div>

        </div >
    );
};

export default LeaveTable;
