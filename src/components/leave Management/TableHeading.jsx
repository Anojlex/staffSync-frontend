
import React, { useState } from 'react';


const TableHeading = ({ id, comment, setOpen, setAction, setLeaveId, setComment, leave }) => {


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
        < div className='    border-b  sm:h-14 m-3 py-2 bg-slate-200 text-xs font-normal rounded-xl sm:flex ' >
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>Date of application:</p>{leave.date}</div>
            < div className='flex-1 px-3  sm:text-center '><p className='font-semibold sm:hidden'>Name</p>{`${leave.employeeId.firstname} ${leave.employeeId.lastname}`}</div >
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>Leave type:</p>{leave.leaveType}</div>
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>From date:</p>{leave.fromDate}</div>
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>To date:</p>{leave.toDate}</div>
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>No of days:</p>{2}</div>
            <div className='flex-1 px-3 sm:text-center'><p className='font-semibold sm:hidden'>Reason:</p>{leave.reason}</div>
            <div className='flex-1 px-3 sm:text-center overflow-hidden'><p className='font-semibold sm:hidden'>Comment:</p>{leave.comment ? <div className='overflow-x-auto whitespace-nowrap' style={{ '-ms-overflow-style': 'none', scrollbarWidth: 'none' }}>
                {leave.comment}
            </div> : "---"}</div>
            <div className='flex-1 px-3 sm:text-center '><p className='font-semibold sm:hidden'>Status:</p>{leave.status}</div>
            <div className='flex-2 pl-14  '>
                <button
                    onClick={rejectLeave}
                    className={`w-16 h-5 m-1  rounded-3xl  ${isRejected ? 'disabled bg-gray-400 text-white ' : 'bg-red-300 text-red-700 hover:bg-red-400'}`}
                    disabled={isRejected}
                >
                    Reject
                </button>
                <button
                    onClick={approveLeave}
                    className={`w-16 h-5 m-1  rounded-3xl  ${isApproved ? 'disabled bg-gray-400 text-white ' : 'text-green-700 bg-green-300 hover:bg-green-400'}`}
                    disabled={isApproved}
                >
                    Approve
                </button>
            </div>
        </div >
    );
};

export default TableHeading;
