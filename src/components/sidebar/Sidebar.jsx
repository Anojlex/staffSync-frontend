import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeEmployee } from '../Utils/employeeSlice';
import { removeAdmin } from '../Utils/adminSlice.jsx';


const Sidebar = ({ active }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.admin.data.accessToken)
    const logout = () => {

        dispatch(removeAdmin());
        dispatch(removeEmployee());
        navigate('/');

    }
    const style = "text-white bg-orange-600 bg-gradient-to-r from-orange-500";
    return (
        <div className='bg-[#34444c] w-60 text-sm shadow-2xl text-gray-50 fixed left-0 top-16 h-screen'>
            <ul className='font-sans subpixel-antialiased'>
                <li className='text-2xl font-mono flex p-1 mt-4 mb-10'>
                    <img className="p-1 w-12 h-12" src="https://img.icons8.com/ios/100/FD7E19/connection-sync.png" alt='' />
                    <p className='p-2 text-[#f7444e]'>staffSync</p>
                </li>
                <Link to="/home" >
                    <li className={`h-10 p-3 ${active == "dashboard" ? style : ""}`}>Employee Management</li>
                </Link>
                <Link to="/leave" >
                    <li className={`h-10 p-3 ${active == "leave" ? style : ""}`}>Leave Management</li>
                </Link>
                <Link to="/attendance" >
                    <li className={`h-10 p-3 ${active == "attendance" ? style : ""}`}>Attendance</li>
                </Link>
                <Link to="/payroll" >
                    <li className={`h-10 p-3 ${active == "payroll" ? style : ""}`}>Payroll</li>
                </Link>
                <Link to="/connect">
                    <li className={`h-10 p-3 ${active == "connect" ? style : ""}`}>Connect</li>
                </Link>
                <li onClick={logout} className='h-14 p-3 cursor-pointer'>Logout</li>
            </ul>
        </div >
    );
};

export default Sidebar
