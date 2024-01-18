import React, { useState } from 'react';
import LoadingSpinner from '../Spinner';
import useFetchAttendance from '../Hooks/useFetchAttendance';
import { useSelector } from 'react-redux';
import Present from './Present';
import Absent from './Absent';
import OverView from './OverView';
import MarkAttendance from './MarkAttendance';
import MonthlyAttendance from './MonthlyAttendance';
const AttendanceContainer = () => {
    const [isLoading, setIsLoading] = useState(false);

    useFetchAttendance(setIsLoading);

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const [specificDate, setSpecificDate] = useState(formattedDate);

    const changedate = (action) => {
        const date = new Date(specificDate);
        if (action === 'next') {
            if (specificDate !== formattedDate) {
                date.setDate(date.getDate() + 1);
            }
        } else if (action === 'prev') {
            date.setDate(date.getDate() - 1);
        }
        const newFormattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        setSpecificDate(newFormattedDate);

    }
    const attendance = useSelector((state) => state.attendance?.data) || [];
    const filteredAttendance = attendance?.find((attend) => attend.date === specificDate) || []

    return (
        <div className='bg-[#e6e4ef] h-full ml-60 rounded-sm flex-col p-8 mt-6 pt-12'>
            {isLoading ? (
                <div className='flex justify-center pr-36 '>
                    <LoadingSpinner />
                </div>
            ) : (
                <>
                    <OverView attendance={filteredAttendance} />
                    <div className='flex-col'>
                        <div className='flex'>
                            <MarkAttendance changedate={changedate} date={specificDate} today={formattedDate} />
                            <Present today={formattedDate} />
                        </div>
                        <MonthlyAttendance changedate={changedate} date={specificDate} today={formattedDate} />
                    </div>
                </>
            )
            }
        </div >
    );
};

export default AttendanceContainer;
