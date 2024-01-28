import React from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../Utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { addAttendance } from '../Utils/attendanceSlice';

const MarkAttendance = ({ changeDate, date, today }) => {
    const dispatch = useDispatch();

    const employee = useSelector((state) => state.employee.data) || [];

    const updateAttendance = (id, action) => {

        const response = axiosInstance.post("/users/update-attendance", {
            id: id,
            date: date,
            action: action
        }).then((response) => {
            dispatch(addAttendance(response.data));

        }).catch((err) => {
            console.log(err);
        })


    }
    const attendance = useSelector((state => state.attendance.data))

    const todaysAttendance = attendance?.find((attend) => attend.date === date)

    const isToday = date === today
    return (
        <div className='bg-white rounded-xl shadow-sm w-[80%] h-[500px] p-2  mt-3 mr-2 ' >
            <div className='flex justify-center  h-8 text-[#64728c]font-mono pt-2 ' >
                < img onClick={() => changeDate("prev")} className="w-4 h-4 mt-1 mr-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-left' />
                <div className='text-[#444e61] w-20 flex justify-center'>{isToday ? "Today" : date}</div>
                < img onClick={() => changeDate("next")} className="w-4 h-4 mt-1 ml-5 " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-right' />
            </div >
            < div className='flex  items-center h-10    m-3 py-2 bg-slate-50 text-sm font-sans-bold  text-[#64728c] ' >
                <div className='flex-1 px-3 '>Employee</div>
                < div className='flex-1 px-3'>Emp ID</div >
                <div className='flex-1 px-3 '>Designation</div>
                <div className='flex-1 px-3 '>Attendance</div>
                <div className='flex-1 px-3 '>Action</div>
                <div className='flex-1 px-3 '></div>
            </div >

            <div className='overflow-y-auto max-h-[calc(100vh-14rem)] rounded-md h-[380px] bg-white' style={{
                scrollbarWidth: 'none'
            }}>

                {
                    employee.map((emp) => {
                        const isPresent = todaysAttendance?.present.find((presentEmp) => presentEmp._id === emp._id);
                        const isAbsent = todaysAttendance?.absent.some((absentEmp) => absentEmp._id === emp._id);
                        return (
                            <div key={emp._id} className='flex justify-evenly items-center border-b h-12 m-3 pr-10 bg-slate-200 text-sm font-normal  text-[#64728c]'>
                                <div className='flex-1 px-3'>{emp.firstname} {emp.lastname}</div>
                                <div className='flex-1 px-3'>{emp.empID}</div>
                                <div className='flex-1 px-3'>{emp.designation}</div>
                                <div className={`flex-1 px-3 ${isPresent ? "text-green-500" : "text-red-500"}`}>
                                    {isPresent ? 'Present' : (isAbsent ? 'Absent' : 'Not Marked')}
                                </div>
                                <div className='ml-14'>
                                    <button
                                        onClick={() => updateAttendance(emp._id, "Present")}
                                        disabled={!isToday}
                                        className={`border  w-16 text-xs h-5 rounded-2xl ml-2 
                                        ${isToday ? "border-green-500 text-green-500 hover:text-green-800" : "bg-slate-300 text-white border-white"}`} >
                                        Present
                                    </button>
                                    <button
                                        onClick={() => updateAttendance(emp._id, "Absent")}
                                        disabled={!isToday}
                                        className={`border  w-16 text-xs h-5 rounded-2xl ml-2 
                                        ${isToday ? "border-red-500 text-red-500 hover:text-red-800" : "bg-slate-300 text-white border-white"}`} >
                                        Absent
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div >

    )
}

export default MarkAttendance