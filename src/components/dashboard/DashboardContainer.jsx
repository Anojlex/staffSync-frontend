import React from 'react'
import { useSelector } from 'react-redux';
import useFetchAttendance from '../Hooks/useFetchAttendance';
import Present from '../Attendance/Present';
import OverView from '../Attendance/OverView';
import { getTodaysDate, formatDate } from '../Utils/dateUtils';
import { useState } from 'react';
import ToDo from './ToDo';
import LeaveInfo from './LeaveInfo';
import useFetchEmployee from '../Hooks/useFetchEmployee';


const DashboardContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const attendance = useSelector((state) => state.attendance?.data) || [];
    useFetchEmployee(setIsLoading);
    useFetchAttendance(setIsLoading);

    const today = getTodaysDate();
    const [currentSelectedDate, setCurrentSelectedDate] = useState(today);

    const changeDate = (action) => {
        const date = new Date(currentSelectedDate);
        if (action === 'next' && currentSelectedDate !== today) {
            date.setDate(date.getDate() + 1);
        }
        else if (action === 'prev') {
            date.setDate(date.getDate() - 1);
        }
        const newDate = formatDate(date);
        setCurrentSelectedDate(newDate);
    };

    const filteredAttendance = attendance?.find((attend) => attend.date === currentSelectedDate) || [];
    return (
        <div className='bg-[#efefef] sm:ml-60 rounded-sm flex-col p-3 mt-6 pt-12 '>
            <OverView attendance={filteredAttendance} />
            <div className='flex  flex-wrap'>
                <Present today={today} />
                <LeaveInfo />
                <ToDo />
            </div>
        </div>
    )
}

export default DashboardContainer