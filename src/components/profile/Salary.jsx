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
const Salary = ({ employeeId }) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")

    const employee = useSelector(state => {
        return state.employee.data.find(emp => emp._id === employeeId) || null;
    });

    const { register, handleSubmit, formState: { errors, isDirty }, setValue, getValues, reset } = useForm({
        defaultValues: {
            basic: employee.salary?.basic || '',
            HRA: employee.salary?.HRA || '',
            PA: employee.salary?.PA || '',
            DA: employee.salary?.DA || '',
            SPA: employee.salary?.SPA || '',
            EPF: employee.salary?.EPF || '',
            PT: employee.salary?.PT || '',
            IT: employee.salary?.IT || '',
            conveyance: employee.salary?.conveyance || '',
            medical: employee.salary?.medical || '',
            bonus: employee.salary?.bonus || '',
            gratuity: employee.salary?.gratuity || '',

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
    const totalDeductions = (employee.salary?.basic * employee.salary?.EPF / 100) +
        (employee.salary?.basic * employee.salary?.PT / 100) +
        (employee?.salary?.basic * employee.salary?.IT / 100);

    const totalEarnings = employee.salary?.basic +
        (employee.salary?.basic * (employee.salary?.HRA / 100 + employee.salary?.PA / 100 + employee.salary?.DA / 100 +
            employee.salary?.SPA / 100 + employee?.salary?.conveyance / 100 + employee.salary?.medical / 100 +
            employee.salary?.gratuity / 100));

    const netSalary = (totalEarnings - totalDeductions).toFixed(2);

    return (
        <div className='w-full bg-white mt-5 p-5  rounded-md shadow-md flex-col '>

            <div className='flex justify-between'>
                <h6 className='text-[#64728c] m-1'>Salary Details</h6>
            </div>
            <hr />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex-col w-12% h-fit bg-[#ffffff] rounded-md  p-2 '
            >
                <div className='flex flex-wrap'>
                    <InputField
                        label={"Basic Salary (₹)"}
                        name={"basic"}
                        type={"text"}
                        defaultValue={employee.basic}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"House Rent Allowance(HRA)(%)"}
                        name={"HRA"}
                        type={"text"}
                        defaultValue={employee.HRA}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Personal Allowance(PA)(%)"}
                        name={"PA"}
                        type={"text"}
                        defaultValue={employee.PA}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Dearness Allowance(DA)(%)"}
                        name={"DA"}
                        type={"text"}
                        defaultValue={employee.DA}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                </div>

                <div className='flex mt-2 flex-wrap '>
                    <InputField
                        label={"Special Allowance(SPA)(%)"}
                        name={"SPA"}
                        type={"text"}
                        defaultValue={employee.SPA}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Employee Provident Fund(EPF)(%)"}
                        name={"EPF"}
                        type={"text"}
                        defaultValue={employee.EPF}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Income Tax(IT)(%)"}
                        name={"IT"}
                        type={"text"}
                        defaultValue={employee.IT}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Professional Tax(PT)(%)"}
                        name={"PT"}
                        type={"text"}
                        defaultValue={employee.PT}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                </div>
                <div className='flex  flex-wrap mt-2'>
                    <InputField
                        label={"Conveyance Allowance(%)"}
                        name={"conveyance"}
                        type={"text"}
                        defaultValue={employee.conveyance}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={" Medical Allowance(%)"}
                        name={"medical"}
                        type={"text"}
                        defaultValue={employee.medical}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Bonus(%)"}
                        name={"bonus"}
                        type={"text"}
                        defaultValue={employee.bonus}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                    <InputField
                        label={"Gratuity(%)"}
                        name={"gratuity"}
                        type={"text"}
                        defaultValue={employee.gratuity}
                        setValue={setValue}
                        register={register}
                        errors={errors}
                        minLen={1}
                    />
                </div>
                <div className='flex flex-wrap mt-2 sm:flex-nowrap'>
                    <div className='flex-col text-sm text-[#64728c] m-2' >
                        <div className='ml-3'>
                            <label className='m-2 text-xs text-[#64728c]'>Total Earnings</label>
                        </div>
                        <input
                            name="totalEarnings"
                            type="text"
                            defaultValue={isNaN(totalEarnings) ? 0 : totalEarnings}
                            disabled="true"
                            className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start items-center border border-gray-300 rounded-xl outline-none'

                        />
                    </div>
                    <div className='flex-col text-sm text-[#64728c] m-2' >
                        <div className='ml-3'>
                            <label className='m-2 text-xs text-[#64728c]'>Total Deductions</label>
                        </div>
                        <input
                            name="totalDeductions"
                            type="text"
                            defaultValue={isNaN(totalDeductions) ? 0 : totalDeductions}
                            disabled="true"
                            className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start items-center border border-gray-300 rounded-xl outline-none'

                        />
                    </div>
                    <div className='flex-col text-sm text-[#64728c] m-2' >
                        <div className='ml-3'>
                            <label className='m-2 text-xs text-[#64728c]'>Net Salary</label>
                        </div>
                        <input
                            name="netSalary"
                            type="text"
                            defaultValue={isNaN(netSalary) ? 0 : netSalary}
                            disabled="true"
                            className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start items-center border border-gray-300 rounded-xl outline-none'

                        />
                    </div>
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

export default Salary;
