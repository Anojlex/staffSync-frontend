import React from 'react';

const SelectField = ({ label, name, options, defaultValue, setValue, register, errors }) => {
    return (
        <div className='flex-col text-sm text-[#64728c] m-2'>
            <div className='ml-3'>
                <label className='m-2 text-xs text-[#64728c]'>{label}</label>
            </div>
            <select
                name={name}
                onChange={(e) => setValue(name, e.target.value)}
                className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start items-center border border-gray-300 rounded-xl bg-white'
                {...register(name, {
                    required: `${label} is required.`,
                })}
                defaultValue={defaultValue}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='h-1'>
                {errors[name] && (
                    <p className="text-xs text-red-400 font-light ml-4">{errors[name].message}</p>
                )}
            </div>
        </div>
    );
};
export default SelectField