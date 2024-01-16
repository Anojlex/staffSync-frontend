import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../Utils/axiosInstance.jsx';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputField.jsx';
import { addEmployee } from '../Utils/employeeSlice.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from '../Button.jsx';
import ResetButton from '../ResetButton.jsx';
const OtherInfo = ({ employeeId }) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")

    const employee = useSelector(state => {
        return state.employee.data.find(emp => emp._id === employeeId) || null;
    });

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset } = useForm({
        defaultValues: {
            DOB: employee?.DOB || '',
            maritalStatus: employee?.maritalStatus || '',
            anniversaryDate: employee?.anniversaryDate || '',

        },
    });

    const onSubmit = (data) => {
        const changedValues = {
            employeeId: employeeId
        };
        const currentFormData = getValues();

        for (const key in currentFormData) {

            if (currentFormData[key] !== employee[key]) {
                changedValues[key] = currentFormData[key];
            }
        }
        console.log(changedValues);

        axiosInstance.patch('/users/update-details', changedValues)

            .then(response => {
                dispatch(addEmployee(response.data));
                reset()
                toast.success('Saved successfully!', {
                    position: 'bottom-left',
                    autoClose: 3000,

                });
            })
            .catch(error => {
                setErrorMessage(error.response.data.message);
                toast.error('Failed to save. Please try again.', {
                    position: 'bottom-left',
                    autoClose: 3000,
                    style: {
                        minWidth: '200px',
                        backgroundColor: '#ff6b6b',
                    },
                });
            });

    }


    return (
        <div className='w-full bg-white mt-5 p-5  rounded-md shadow-md flex-col '>
            <div className='flex justify-between'>
                <h6 className='text-[#64728c] m-1'>Personal Info</h6>
            </div>
            <hr />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex-col w-12% h-fit bg-[#ffffff] rounded-md  p-2 '
            >
                <div className=' flex flex-wrap '>
                    <InputField
                        label={"Date of Birth"}
                        name={"DOB"}
                        type={"date"}
                        defaultValue={employee.DOB}
                        setValue={setValue}
                        register={register}
                        errors={errors}

                    />
                    <InputField
                        label={"Marital Status"}
                        name={"maritalStatus"}
                        type={"text"}
                        defaultValue={employee.maritalStatus}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={3}
                    />
                    <InputField
                        label={" Anniversary"}
                        name={"anniversaryDate"}
                        type={"date"}
                        defaultValue={employee.anniversaryDate}
                        setValue={setValue}
                        register={register}
                        errors={errors}

                    />


                </div>


                <div className='h-1'>
                    <p className="text-xs text-red-400 font-light ml-4">{errorMessage}</p>
                </div>
                <div className='flex justify-end mt-4 p-4'>
                    <ResetButton isDirty={isDirty} reset={reset} />
                    <Button isDirty={isDirty} />

                </div>
            </form >

        </div>

    );
};

export default OtherInfo;
