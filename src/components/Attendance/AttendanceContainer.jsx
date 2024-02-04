import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetchAttendance from '../Hooks/useFetchAttendance';
import LoadingSpinner from '../Spinner';
import Present from './Present';
import OverView from './OverView';
import MarkAttendance from './MarkAttendance';
import MonthlyAttendance from './MonthlyAttendance';
import { getTodaysDate, formatDate } from '../Utils/dateUtils';

const AttendanceContainer = () => {
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
        <div className=' md: bg-[#e6e4ef] h-full sm:ml-60 rounded-sm flex-col p-8 mt-6 pt-12'>
            {isLoading ? (
                <div className='flex justify-center pr-36 '>
                    <LoadingSpinner />
                </div>
            ) : (
                <>
                    <OverView attendance={filteredAttendance} />
                    <div className='flex-col'>
                        <div className='flex flex-wrap'>
                            <MarkAttendance changeDate={changeDate} date={currentSelectedDate} today={today} />
                            <Present today={today} />
                        </div>
                        <MonthlyAttendance changeDate={changeDate} date={currentSelectedDate} today={today} />
                    </div>
                </>
            )}
        </div>
    );
};

export default AttendanceContainer;
