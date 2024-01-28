import React from 'react';
import { useSelector } from 'react-redux';

const AttendanceInfoCard = ({ title, value }) => (
    <div className='w-56 h-16 bg-slate-100 text-center border border-[#64728c55] p-1'>
        <p>{title}</p>
        <p>{value}</p>
    </div>
);

const OverView = ({ attendance }) => {
    const employee = useSelector((state) => state.employee.data) || [];
    const leaveRequests = useSelector((state) => state.leave.data) || [];

    const today = new Date();
    today.setHours(0, 0, 0, 0); // to ignore time part of the date

    const getTodayLeaveRequests = () => {
        return leaveRequests.filter((leave) => {
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
    };

    const todayLeaveRequests = getTodayLeaveRequests();

    const numberOfApprovedLeavesToday = todayLeaveRequests?.length;

    const unplannedLeave = attendance?.absent?.length - numberOfApprovedLeavesToday;

    return (
        <div className='w-full h-40 bg-white mt-5 flex-col p-1 rounded-md text-[#64728c]'>
            <div className='ml-3 p-3 '>Attendance</div>
            <div className='flex flex-wrap justify-center items-center'>
                <AttendanceInfoCard title="Today Present" value={`${attendance?.present?.length} / ${employee.length}`} />
                <AttendanceInfoCard title="Planned leave" value={numberOfApprovedLeavesToday} />
                <AttendanceInfoCard title="Unplanned leave" value={unplannedLeave < 0 ? 0 : unplannedLeave} />
            </div>
        </div>
    );
};

export default OverView;
