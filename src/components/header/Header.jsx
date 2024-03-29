import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const cloudinaryBaseUrl = 'https://res.cloudinary.com/dvmjmrira/image/upload/';
import useFetchEmployee from '../Hooks/useFetchEmployee';
const Header = () => {
    const navigate = useNavigate()
    const admin = useSelector(state => state.admin?.data?.user)




    return (
        <div className='bg-orange-600  bg-gradient-to-r from-orange-500 flex  w-screen h-16 fixed top-0 shadow-sm z-20 justify-center  sm:justify-end '>
            <div className='flex  w-32 mt-2 h-12  bg-gray-800 rounded-r-full rounded-l-full sm:mr-20'>
                <div className='w-12 h-12 p-1'><img className='w-10 h-10 rounded-full  ' src={admin?.avatar} alt="" /></div>
                <p className='p-3 text-white'>{admin?.firstname}</p>
            </div >
        </div >
    )
}

export default Header