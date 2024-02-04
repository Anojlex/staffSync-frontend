import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { convertToDDMMYYYY } from '../Utils/dateUtils.jsx';
import InputField from '../InputField.jsx';
import SelectField from '../SelectField.jsx';
import { addEmployee } from '../Utils/employeeSlice.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from '../Button.jsx';
import ResetButton from '../ResetButton.jsx';
import axiosInstance from '../Utils/axiosInstance.jsx';
import ChangePassword from './ChangePassword.jsx';


const UpdateBasicDetails = ({ employeeId }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const employee = useSelector(state => {
        return state.employee.data.find(emp => emp._id === employeeId) || null;
    });
    const formattedJoiningDate = employee.joiningDate.split('-').reverse().join('-');

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset } = useForm({
        defaultValues: {
            firstname: employee.firstname || '',
            lastname: employee.lastname || '',
            email: employee.email || '',
            phone: employee.phone || '',
            empID: employee.empID || '',
            joiningDate: formattedJoiningDate || '',
            department: employee.department || '',
            designation: employee.designation || '',
        },
    });


    const onSubmit = (data) => {
        const changedValues = {
            employeeId: employeeId
        };

        const currentFormData = getValues();

        for (const key in currentFormData) {
            if (key === 'joiningDate') {
                const newDate = convertToDDMMYYYY(currentFormData[key])
                console.log(newDate);
                console.log(employee[key]);
                if (newDate !== employee[key]) {
                    changedValues[key] = newDate
                }
            } else if (currentFormData[key] !== employee[key]) {
                changedValues[key] = currentFormData[key];
            }
        }

        console.log(changedValues);


        axiosInstance.patch('/users/update-details', changedValues)

            .then(response => {
                console.log("data is", response.data);
                dispatch(addEmployee(response.data));
                reset()
                toast.success('Saved successfully!', {
                    position: 'bottom-left',
                    autoClose: 3000,

                });
            })
            .catch(error => {

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

    const departmentOptions = [
        { label: 'Design', value: 'Design' },
        { label: 'Development', value: 'Development' },
        { label: 'Sales', value: 'Sales' },
        { label: 'Management', value: 'Management' },


    ];
    const designationOptions = [
        { label: 'Designer', value: 'Designer' },
        { label: 'Frontend Developer', value: 'Frontend Developer' },
        { label: 'Backend Developer', value: 'Backend Developer' },
        { label: 'Devops Engineer', value: 'Devops Engineer' },
        { label: 'BDE', value: 'BDE' },
        { label: 'Team Lead', value: 'Team Lead' },

    ];
    const openForm = () => {
        setOpen(true)
    }
    const closeForm = () => {
        reset()
        setOpen(false)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex-col w-12% h-fit bg-[#ffffff] rounded-md  p-2  '
            >
                <div className='flex flex-wrap  '>
                    < InputField
                        label={"First Name"}
                        name={"firstname"}
                        type={"text"}
                        defaultValue={employee.firstname}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={3}
                    />
                    <InputField
                        label={"Last Name"}
                        name={"lastname"}
                        type={"text"}
                        defaultValue={employee.lastname}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />

                    <InputField
                        label={"Email"}
                        name={"email"}
                        type={"text"}
                        defaultValue={employee.email}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        validateEmail={true}
                    />
                </div >
                <div className='flex flex-wrap '>

                    <InputField
                        label={"Phone"}
                        name={"phone"}
                        type={"text"}
                        defaultValue={employee.phone}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        validatePhone={true}
                    />


                    <InputField
                        label={"Employee ID"}
                        name={"empID"}
                        type={"text"}
                        defaultValue={employee.empID}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={4}
                    />
                    <InputField
                        label={"Date of Join"}
                        name={"joiningDate"}
                        type={"date"}
                        defaultValue={employee.formattedJoiningDate}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className='flex flex-wrap'>
                    <SelectField
                        label="Department"
                        name="department"
                        options={departmentOptions}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        defaultValue={employee.department}
                    />
                    <SelectField
                        label="Designation"
                        name="designation"
                        options={designationOptions}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        defaultValue={employee.designation}
                    />
                </div>

                <div className='flex justify-center mt-4 p-4 sm:justify-end'>
                    <ResetButton isDirty={isDirty} reset={reset} />
                    <Button isDirty={isDirty} />

                </div>
            </form >

            <div className='flex justify-end mt-4 pr-10'>
                <div className='text-sm text-orange-400 cursor-pointer hover:text-blue-600' onClick={openForm}>Change Password</div>
                {open && (<ChangePassword employeeId={employeeId} closeForm={closeForm} />)}
            </div>

        </div>


    );
};

export default UpdateBasicDetails;
