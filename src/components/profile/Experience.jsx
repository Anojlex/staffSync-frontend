import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axiosInstance from '../Utils/axiosInstance.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../Utils/employeeSlice.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import InputField from '../InputField.jsx';
import Button from '../Button.jsx';
import ResetButton from '../ResetButton.jsx';


const Experience = ({ employeeId }) => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');

    const employee = useSelector((state) => {
        return state.employee.data.find((emp) => emp._id === employeeId) || null;
    });

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset, control } = useForm({
        defaultValues: {
            experience: employee.experience.map((item) => ({ ...item })) || [{ designation: '', company: '', year: '' }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'experience',
    });

    const onSubmit = (data) => {
        const changedValues = {
            employeeId: employeeId,
            experience: data.experience,
        };
        console.log(changedValues);
        axiosInstance
            .patch('/users/update-details', changedValues)
            .then((response) => {
                dispatch(addEmployee(response.data));
                reset();
                toast.success('Saved successfully!', {
                    position: 'bottom-left',
                    autoClose: 3000,
                });
            })
            .catch((error) => {
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
    };

    return (
        <div className='w-full bg-white mt-5 p-5  rounded-md shadow-md flex-col '>

            <div className='flex justify-between'>
                <h6 className='text-[#64728c] m-1'>Experience</h6>
                {
                    fields.length < 3 && (
                        <div className='flex justify-end mr-5'>
                            <img
                                src="https://img.icons8.com/windows/64/add--v1.png"
                                onClick={() => append({ designation: '', company: '', year: '' })}
                                className='w-6 h-6 cursor-pointer'
                                alt=''
                            />

                        </div>
                    )
                }
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className='flex-col w-12% h-fit bg-[#ffffff] rounded-md p-8 '>
                {fields.map((item, index) => (
                    <div className='flex' key={item.id}>
                        <span className='text-[#64728c] mt-11'>.{index + 1}</span>
                        <InputField
                            label={`Designation`}
                            name={`experience[${index}].designation`}
                            type='text'
                            defaultValue={item.designation}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={3}
                        />
                        <InputField
                            label={`Company`}
                            name={`experience[${index}].company`}
                            type='text'
                            defaultValue={item.company}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={5}
                        />
                        <InputField
                            label={`Year`}
                            name={`experience[${index}].year`}
                            type='text'
                            defaultValue={item.year}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={1}
                        />
                        {index > 0 && (
                            <img
                                src="https://img.icons8.com/ios/50/delete-sign--v1.png"
                                onClick={() => remove(index)}
                                className='w-5 h-5 cursor-pointer mt-12'
                            />

                        )}
                    </div>
                ))
                }

                <div className='flex  justify-end  '>

                    <ResetButton isDirty={isDirty} reset={reset} />
                    <Button isDirty={isDirty} />

                </div>

                <div className='h-1'>
                    <p className='text-xs text-red-400 font-light ml-4'>{errorMessage}</p>
                </div>


            </form >
        </div >

    );
};

export default Experience;
