import React, { useState } from 'react'
import InputField from '../InputField'
import axiosInstance from '../Utils/axiosInstance.jsx';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";


const ChangePassword = ({ employeeId, closeForm }) => {
    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm()
    const [errorMessage, setErrorMessage] = useState("")
    const onSubmit = (data) => {
        console.log(data);
        const { newPassword, confirmPassword } = data;

        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords do not match")
            return;
        }
        data.employeeId = employeeId

        console.log(data);
        axiosInstance.post('/users/change-password', data)
            .then(response => {
                closeForm()
                toast.success('Password changed successfully!', {
                    position: 'bottom-left',
                    autoClose: 2000,
                });
            })
            .catch(error => {
                setErrorMessage(error.message)
                toast.error('Failed to change password. Please try again.', {
                    position: 'bottom-left',
                    autoClose: 2000,
                    style: {
                        minWidth: '200px',
                        backgroundColor: '#ff6b6b',
                    },
                });
            });
    }
    return (
        <div className='fixed top-0 left-0 h-full w-full flex justify-center items-center z-30'>
            <div className='w-full h-full bg-[#3c3a3aaf] absolute top-0 flex justify-center items-center '>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex-col w-[400px] h-[500px]  bg-[#ffffff] rounded-md p-16'
                >
                    <div className='flex justify-end'>
                        <img
                            className='w-6 h-6 rounded-full'
                            onClick={closeForm}
                            src="https://img.icons8.com/ios-filled/50/FD7E14/cancel.png"
                            alt="Cancel"
                        />
                    </div>
                    <div className='text-center text-2xl font-bold text-slate-700 mb-4'>
                        Change Password
                    </div>

                    <InputField
                        label={"Current Password"}
                        name={"oldPassword"}
                        type={"text"}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        validatePassword={true}
                    />
                    <InputField
                        label={"New Passsword"}
                        name={"newPassword"}
                        type={"text"}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        validatePassword={true}
                    />
                    <InputField
                        label={"Confirm Password"}
                        name={"confirmPassword"}
                        type={"text"}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                    />
                    {errorMessage}
                    <button type="submit" className='h-10 w-60 m-2 ml-4 border-2  border-green-400 text-green-400 rounded-xl pl-3 hover:text-green-600'>
                        Change Passsword
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ChangePassword