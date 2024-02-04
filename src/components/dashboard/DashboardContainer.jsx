import React from 'react'
import { useSelector } from 'react-redux';
import useFetchAttendance from '../Hooks/useFetchAttendance';
import LoadingSpinner from '../Spinner';
import Present from '../Attendance/Present';
import OverView from '../Attendance/OverView';
import { getTodaysDate, formatDate } from '../Utils/dateUtils';
import { useState } from 'react';
import ToDo from './ToDo';


const DashboardContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const attendance = useSelector((state) => state.attendance?.data) || [];
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
        <div className='bg-[#efefef] sm:ml-60 rounded-sm flex-col p-8 mt-6 pt-12 '>
            <OverView attendance={filteredAttendance} />
            <Present today={today} />
        </div>
    )
}

export default DashboardContainer