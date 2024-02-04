import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../Utils/axiosInstance.jsx';
import { useNavigate } from 'react-router-dom';


const AddEmployeeForm = ({ closeForm, open }) => {


    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        axiosInstance.post('/users/register', data)
            .then(response => {
                reset()
                closeForm()
                navigate("/home");
            })
            .catch(error => {
                setErrorMessage(error.response.data.message);
            });

    };
    const closeAddForm = () => {
        reset()
        closeForm()
    }
    return (
        <>
            {open && (
                <div className='fixed top-0 left-0 h-full w-full flex justify-center items-center z-30'>
                    <div className='w-full h-full bg-[#3c3a3aaf] absolute top-0 flex justify-center items-center '>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='flex-col w-12% flex-wrap  bg-[#ffffff] rounded-sm shadow-lg p-8'
                        >
                            <div className='flex justify-end'>
                                <img
                                    className='w-6 h-6 rounded-full'
                                    onClick={closeAddForm}
                                    src="https://img.icons8.com/ios-filled/50/FD7E14/cancel.png"
                                    alt="Cancel"
                                />
                            </div>
                            <div className='text-center text-2xl font-bold text-slate-700 mb-4'>
                                Create Employee
                            </div>

                            <div className='flex mb-1'>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>First Name</label>
                                    </div>
                                    <input
                                        name="firstname"
                                        type="text"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("firstname", {
                                            required: 'First name is required.',
                                            minLength: {
                                                value: 3,
                                                message: 'Minimum length of 3 characters is required.',
                                            },
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.firstname && (
                                            <div className="text-xs text-red-400 font-light ml-4">{errors.firstname.message}</div>
                                        )}</div>
                                </div>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Last Name</label>
                                    </div>
                                    <input
                                        name="lastname"
                                        type="text"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("lastname", {
                                            required: 'Last name is required.',
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.lastname && (
                                            <div className="text-xs text-red-400 font-light ml-4">{errors.lastname.message}</div>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className='flex mb-1'>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Email</label>
                                    </div>
                                    <input
                                        name="email"
                                        type="text"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("email", {
                                            required: 'Email is required.',
                                            pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: 'Invalid email address.',
                                            },
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.email && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.email.message}</p>
                                        )}
                                    </div>

                                </div>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Phone</label>
                                    </div>
                                    <input
                                        name="phone"
                                        type="text"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("phone", {
                                            required: 'Phone number is required.',
                                            minLength: {
                                                value: 10,
                                                message: 'Phone number must be 10 digits.',
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: 'Phone number must be 10 digits.',
                                            },
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.phone && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.phone.message}</p>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className='flex mb-1'>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Password</label>
                                    </div>
                                    <input
                                        name="password"
                                        type="password"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("password", {
                                            required: 'Password is required.',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters long.',
                                            },
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.password && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.password.message}</p>
                                        )}
                                    </div>

                                </div>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Confirm Password</label>
                                    </div>
                                    <input
                                        name="confirmPassword"
                                        type="password"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("confirmPassword", {
                                            required: 'Confirm Password is required.',
                                            validate: (value) =>
                                                value === getValues("password") || "Passwords do not match.",
                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.confirmPassword && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>

                                </div>
                            </div>
                            <div className='flex mb-1'>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Employee ID</label>
                                    </div>
                                    <input
                                        name="empID"
                                        type="text"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("empID", {
                                            required: true,

                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.empID && errors.empID.type === "required" && (
                                            <p className="text-xs text-red-400 font-light ml-4">Employee ID is required.</p>
                                        )}
                                    </div>


                                </div>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Date of Join</label>
                                    </div>
                                    <input
                                        name="joiningDate"
                                        type="date"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("joiningDate", {
                                            required: true,

                                        })}
                                    />
                                    <div className='h-3'>
                                        {errors.joiningDate && errors.joiningDate.type === "required" && (
                                            <p className="text-xs text-red-400 font-light ml-4">Date of join is required.</p>
                                        )}
                                    </div>


                                </div>
                            </div>
                            <div className='flex mb-1'>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Department</label>
                                    </div>
                                    <select
                                        name="department"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("department", {
                                            required: 'Department is required.',
                                        })}
                                    >
                                        <option value="" disabled>Select Department</option>
                                        <option value="IT">IT</option>
                                        <option value="HR">HR</option>

                                    </select>
                                    <div className='h-3'>
                                        {errors.department && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.department.message}</p>
                                        )}
                                    </div>

                                </div>
                                <div className='flex-col text-sm text-[#64728c] m-2'>
                                    <div className='ml-3'>
                                        <label>Designation</label>
                                    </div>
                                    <select
                                        name="designation"
                                        className='h-11 w-64 bg-white pl-2 ml-3 mt-1 rounded-md outline-none border'
                                        {...register("designation", {
                                            required: 'Designation is required.',
                                        })}
                                    >
                                        <option value="" disabled>Select Designation</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                        <option value="HR Manager">HR Manager</option>

                                    </select>
                                    <div className='h-3'>
                                        {errors.designation && (
                                            <p className="text-xs text-red-400 font-light ml-4">{errors.designation.message}</p>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className='h-3'>

                                <p className="text-xs text-red-400 font-light ml-4">{errorMessage}</p>

                            </div>



                            <div className='flex justify-center'>
                                <button className='bg-orange-400 rounded-3xl text-white px-4 py-2 w-56 hover:bg-orange-500 mt-10' type='submit'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div >
                </div >
            )}
        </>
    );
};

export default AddEmployeeForm;
