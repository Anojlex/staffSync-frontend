import React from 'react';
import axiosInstance from '../Utils/axiosInstance';
import { useRef, useState } from 'react';
import formValidation from '../Utils/formValidation'
import { useNavigate } from 'react-router-dom';
import { addAdmin } from '../Utils/adminSlice';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const validateForm = () => {
        const message = formValidation(email.current.value, password.current.value);

        if (message !== null) {

            setErrorMessage(message);
        } else {
            setErrorMessage(null);
            verifyLogin();
        }
    }

    const verifyLogin = () => {
        const postData = {
            email: email.current.value,
            password: password.current.value
        };

        axiosInstance.post('/users/login', postData)
            .then(response => {

                dispatch(addAdmin(response.data))

                navigate("/home");
            })
            .catch(error => {
                setErrorMessage(error.response.data.message);
            });
    }


    return (
        <div className='flex flex-col md:flex-row bg-[rgb(247,247,247)]'>
            <div className='md:w-[500px] bg-orange-500  bg-gradient-to-r from-orange-500 h-[700px]'>
                <div className='w-full bg-[#f7f7f7] h-[700px] rounded-tl-full ml-auto md:w-[500px] pt-20'>
                    <div className='flex justify-center mt-24'>
                        <img className="pl-3 w-24" src="https://img.icons8.com/ios/100/connection-sync.png" alt='' />
                    </div>
                    <div className='pl-10 flex justify-center text-[#64728c]'>
                        <p className='p-2 text-[#64728c] text-4xl md:text-6xl'>staffSync</p>
                    </div>
                </div>
            </div>
            <div className='flex-col pt-12 bg-[#f7f7f7] h-[700px] w-full'>

                <form className='w-full md:w-[380px] h-[450px] bg-white mt-12 flex-col justify-center p-7 rounded-xl ml-auto mr-auto shadow-sm'>

                    <div className='flex justify-center m-3'>
                        <img className="w-8" src="https://img.icons8.com/ios/100/connection-sync.png" alt='' />
                    </div>
                    <div className='text-lg md:text-2xl flex justify-center'>
                        <p className='text-[#64728c] font-semibold'>Login</p>
                    </div>
                    <div className='mt-5 ml-2 text-sm text-[#64728c] font-medium'>Email</div>
                    <input ref={email} className="w-full h-12 mt-1 text-sm md:text-base pl-4 rounded-3xl border-2 outline-none" type='email' placeholder='Enter your email' />

                    <div className='flex justify-between mt-5 ml-2 text-sm text-[#64728c] font-medium'>
                        <p>Password</p>
                        <p className='text-orange-400 cursor-pointer'>Forgot Password?</p>
                    </div>

                    <input ref={password} className="w-full h-12 mt-1 text-sm md:text-base pl-4 rounded-3xl border-2 outline-none" type='password' placeholder='Enter your password' />
                    <p className='ml-3 mt-3 text-xs text-red-400 '>{errorMessage}</p>
                    <button onClick={validateForm} className="w-full h-12 mt-9 bg-orange-400 rounded-3xl text-white text-sm md:text-md hover:bg-orange-500" type='button'>Login</button>
                </form>
            </div>
        </div >
    );
};

export default Login;
