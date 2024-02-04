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
const EmergencyContact = ({ employeeId }) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")

    const employee = useSelector(state => {
        return state.employee.data.find(emp => emp._id === employeeId) || null;
    });

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset } = useForm({
        defaultValues: {
            name: employee.emergency?.name || '',
            relation: employee.emergency?.relation || '',
            contactNumber: employee.emergency?.contactNumber || '',
            bloodGroup: employee.emergency?.bloodGroup || '',

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
                    autoClose: 3000, // milliseconds
                    style: {
                        minWidth: '200px', // Adjust the minimum width
                        backgroundColor: '#ff6b6b', // Customize background color
                    },
                });
            });

    }


    return (
        <div className='w-full bg-white mt-5 p-5  rounded-md shadow-md flex-col '>

            <div className='flex justify-between'>
                <h6 className='text-[#64728c] m-1'>Emergency Contact</h6>

            </div>
            <hr />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex-col w-12% h-fit bg-[#ffffff] rounded-md  p-2 '
            >
                <div className='flex flex-wrap '>
                    <InputField
                        label={"Contact Person"}
                        name={"name"}
                        type={"text"}
                        defaultValue={employee.name}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={4}
                    />
                    <InputField
                        label={"Relationship"}
                        name={"relation"}
                        type={"text"}
                        defaultValue={employee.relation}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={3}
                    />
                    <InputField
                        label={"Contact Number"}
                        name={"contactNumber"}
                        type={"text"}
                        defaultValue={employee.contactNumber}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={10}
                    />
                    <InputField
                        label={"Blood Group"}
                        name={"bloodGroup"}
                        type={"text"}
                        defaultValue={employee.bloodGroup}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={3}
                    />

                </div>


                <div className='h-1'>
                    <p className="text-xs text-red-400 font-light ml-4">{errorMessage}</p>
                </div>
                <div className='flex justify-center mt-4 p-4 sm:justify-end'>
                    <ResetButton isDirty={isDirty} reset={reset} />
                    <Button isDirty={isDirty} />

                </div>
            </form >

        </div>

    );
};

export default EmergencyContact;
