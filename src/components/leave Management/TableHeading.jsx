
import React, { useState } from 'react';


const TableHeading = ({ date, name, type, from, to, reason, status, id, noOfDays, comment, setOpen, setAction, setLeaveId, setComment }) => {


    const rejectLeave = () => {
        setAction("Reject")
        setLeaveId(id)
        setComment(comment)
        setOpen(true)
        console.log("clicked");

    }
    const approveLeave = () => {
        setAction("Approve")
        setComment(comment)
        setLeaveId(id)
        setOpen(true)

    }
    const isRejected = status === 'Rejected';
    const isApproved = status === 'Approved';
    return (
        <div className='flex items-center border-b h-14 m-3 py-2 bg-white text-xs font-normal rounded-xl '>
            <div className='flex-1 px-3 text-center'>{date}</div>
            < div className='flex-1 px-3 text-center'>{name}</div >
            <div className='flex-1 px-3 text-center'>{type}</div>
            <div className='flex-1 px-3 text-center'>{from}</div>
            <div className='flex-1 px-3 text-center'>{to}</div>
            <div className='flex-1 px-3 text-center'>{noOfDays}</div>
            <div className='flex-1 px-3 text-center'>{reason}</div>
            <div className='flex-1 px-3 text-center overflow-hidden'>{comment ? <div className='overflow-x-auto whitespace-nowrap' style={{ '-ms-overflow-style': 'none', scrollbarWidth: 'none' }}>
                {comment}
            </div> : "---"}</div>
            <div className='flex-1 px-3 text-center '>{status}</div>
            <div className='flex-2 '>
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
