import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MonthlyAttendance = () => {
    const employee = useSelector((state) => state.employee.data) || [];
    const attendance = useSelector((state) => state.attendance.data) || [];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const [monthIndex, setMonthIndex] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const changeMonth = (action) => {
        if (action === "next") {
            if (monthIndex === 11) {
                setYear(year + 1);
                setMonthIndex(0);
            } else {
                setMonthIndex(monthIndex + 1);
            }
        }
        if (action === "prev") {
            if (monthIndex === 0) {
                setYear(year - 1);
                setMonthIndex(11);
            } else {
                setMonthIndex(monthIndex - 1);
            }
        }
    };

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    const noOfDays = getDaysInMonth(year, monthIndex);

    const datesInMonth = Array.from({ length: noOfDays }, (_, index) => {
        const day = index + 1;
        return new Date(year, monthIndex, day).toLocaleDateString('en-CA');
    })

    return (
        <div className='bg-white rounded-xl shadow-sm h- p-2 mt-3 mr-2'>
            <div className='flex justify-center h-8 text-[#64728c] pt-2'>
                <img onClick={() => changeMonth("prev")} className="w-4 h-4 mt-1 mr-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-left' />
                <div className='w-24 flex justify-center'>{months[monthIndex]}-{year}</div>
                <img onClick={() => changeMonth("next")} className="w-4 h-4 mt-1 ml-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-right' />
            </div>
            <div className='overflow-x-auto max-h-[calc(100vh-14rem)] h-[500px] rounded-md  bg-white' style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>

                <div className='flex items-center border-b h-12 m-3  bg-slate-300 text-sm text-[#444e61]  w-[140%]' style={{ position: 'sticky', top: 0, zIndex: 5 }}>
                    <div className='flex '>
                        <div className='w-24 m-2 px-2'>Employee</div>
                        <div className='w-16 m-2 text-start'>Emp ID</div>
                        <div className='w-20 m-2 text-start'>Designation</div>
                    </div>
                    <div className='flex ml-5'>
                        {datesInMonth.map((date, index) => (
                            <div className="w-10 text-center  " key={index + 1}>{index + 1}</div>
                        ))}
                    </div>
                </div>




                {employee.map((emp) => (
                    <div key={emp._id} className='flex  items-center border-b h-12 m-3 pr-10 bg-slate-200 text-sm  text-[#64728c] w-[140%]'>
                        <div className='flex'>
                            <div className='w-24 m-2 text-start px-2'>{emp.firstname} {emp.lastname}</div>
                            <div className='w-16 m-2 text-start'>{emp.empID}</div>
                            <div className='w-20 m-2  text-start'>{emp.designation}</div>
                        </div>
                        <div className='flex ml-5'>
                            {datesInMonth.map((date, index) => {
                                const todaysAttendance = attendance.find((attend) => attend.date === date);
                                const isPresent = todaysAttendance?.present.some((presentEmp) => presentEmp._id === emp._id);
                                const isAbsent = todaysAttendance?.absent.some((absentEmp) => absentEmp._id === emp._id);
                                return (
                                    <div key={index} className='w-10 h-10 flex justify-center items-center'>
                                        {isPresent ? <img className="w-6 h-6" src="https://img.icons8.com/ios-glyphs/60/40C057/checked-checkbox.png" alt='' /> :
                                            (isAbsent ? <img className="w-6 h-6" src="https://img.icons8.com/metro/52/FA5252/multiply-2.png" alt='' /> : ".")}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );

};

export default MonthlyAttendance;
