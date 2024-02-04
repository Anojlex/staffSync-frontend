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
// ... (import statements)

const Education = ({ employeeId }) => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');

    const employee = useSelector((state) => {
        return state.employee.data.find((emp) => emp._id === employeeId) || null;
    });

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset, control } = useForm({
        defaultValues: {
            education: employee.education.map((item) => ({ ...item })) || [{ degree: '', institution: '', year: '' }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'education',
    });

    const onSubmit = (data) => {
        const changedValues = {
            employeeId: employeeId,
            education: data.education,
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
                <h6 className='text-[#64728c] m-1'>Education</h6>
                {
                    fields.length < 3 && (
                        <div className='flex justify-end mr-5'>
                            <img
                                src="https://img.icons8.com/windows/64/add--v1.png"
                                onClick={() => append({ degree: '', institution: '', year: '' })}
                                className='w-6 h-6 cursor-pointer'
                                alt=''
                            />

                        </div>
                    )
                }
            </div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} className='flex-col w-12% h-fit bg-[#ffffff] rounded-md  '>
                {fields.map((item, index) => (
                    <div className='flex flex-wrap' key={item.id} >
                        <span className='text-[#64728c] mt-11'>.{index + 1}</span>
                        <InputField
                            label={`Qualification`}
                            name={`education[${index}].degree`}
                            type='text'
                            defaultValue={item.degree}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={3}
                        />
                        <InputField
                            label={`Institution`}
                            name={`education[${index}].institution`}
                            type='text'
                            defaultValue={item.institution}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={10}
                        />
                        <InputField
                            label={`Year`}
                            name={`education[${index}].year`}
                            type='text'
                            defaultValue={item.year}
                            setValue={setValue}
                            register={register}
                            errors={errors}
                            minLen={4}
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

                <div className='flex  justify-center  sm:justify-end '>

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

export default Education;
