import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeEmployee } from '../Utils/employeeSlice';
import { removeAdmin } from '../Utils/adminSlice.jsx';
import { removeAttendance } from '../Utils/attendanceSlice.jsx';
import { removeLeave } from '../Utils/leaveSlice.jsx';

const Sidebar = ({ active }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.admin?.data?.accessToken)

    const logout = () => {

        dispatch(removeAdmin());
        dispatch(removeEmployee());
        dispatch(removeAttendance())
        dispatch(removeLeave())
        navigate('/');

    }
    const style = "text-white bg-orange-600 bg-gradient-to-r from-orange-500";
    return (
        <div className='bg-[#34444c] text-sm shadow-2xl text-gray-50  left-0  h-auto w-screen sm:h-screen sm:w-60 sm:fixed sm:top-16'>
            <ul className='font-sans subpixel-antialiased flex-col'>
                <li className='text-2xl font-mono p-1 flex mt-4 mb-10'>
                    <img className="w-12 h-12 p-1" src="https://img.icons8.com/ios/100/FD7E19/connection-sync.png" alt='' />
                    <p className='p-2 text-[#f7444e]'>staffSync</p>
                </li>
                <Link className={`h-10  p-3 flex justify-start items-center  ${active === "dashboard" ? style : ""}  `} to="/home">
                    <li >Dashboard</li>
                </Link>
                <Link to="/directory">
                    <li className={`h-10 p-3 ${active === "directory" ? style : ""}`}>Employee Management</li>
                </Link>
                <Link to="/leave">
                    <li className={`h-10 p-3 ${active === "leave" ? style : ""}`}>Leave Management</li>
                </Link>
                <Link to="/attendance">
                    <li className={`h-10 p-3 ${active === "attendance" ? style : ""}`}>Attendance</li>
                </Link>
                <Link to="/payroll">
                    <li className={`h-10 p-3 ${active === "payroll" ? style : ""}`}>Payroll</li>
                </Link>
                <li onClick={logout} className='h-14 p-3 cursor-pointer'>Logout</li>
            </ul>
        </div >

    );
};

export default Sidebar
