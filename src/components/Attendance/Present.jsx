import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Present = ({ today }) => {

    const [selectedDate, setSelectedDate] = useState(today);

    const changedate = (action) => {
        const date = new Date(selectedDate);
        if (action === 'next') {
            if (selectedDate !== today) {
                date.setDate(date.getDate() + 1);
            }
        } else if (action === 'prev') {
            date.setDate(date.getDate() - 1);
        }
        const newFormattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        setSelectedDate(newFormattedDate);

    }

    const attendance = useSelector((state) => state?.attendance?.data) || [];
    const filteredAttendance = attendance?.find((attend) => attend.date === selectedDate) || []

    const isToday = selectedDate === today


    return (
        <div className='bg-white rounded-xl shadow-sm w-[100%] sm:w-[30%] h-[500px] p-2  mt-3 m-1'>
            <div className='flex justify-center  h-10 text-[#64728c]  pt-2 '>
                <img onClick={() => changedate("prev")} className="w-4 h-4 mt-1 mr-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-left' />
                <div className='w-20 flex justify-center'> {isToday ? "Today" : selectedDate}</div>
                <img onClick={() => changedate("next")} className="w-4 h-4 mt-1 ml-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-right' />
            </div>
            <div className='bg-white h-[430px] p-1 overflow-y-auto max-h-[calc(100vh-14rem)]' style={{
                scrollbarWidth: 'none'
            }}>
                {filteredAttendance?.absent?.map((att, index) => (
                    <div className="bg-slate-200 h-10 flex justify-between rounded-md p-2 text-xs  text-red-600 mt-2" key={index}>
                        <div>{att.firstname}{att.lastname}</div>
                        <div>{att.empID}</div>
                    </div>
                ))}
                {filteredAttendance?.present?.map((att, index) => (
                    < div className="bg-slate-200 h-10 flex justify-between rounded-md p-2 text-xs  text-green-600 mt-2" key={index} >
                        <div>{att.firstname}{att.lastname}</div>
                        <div>{att.empID}</div>
                    </div>
                ))}
            </div >

        </div >

    )
}

export default Present