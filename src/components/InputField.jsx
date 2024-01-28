const InputField = ({ label, name, type, setValue, register, errors, defaultValue, minLen, validateEmail, validatePhone, validatePassword, disabled }) => {

    const validationRules = {
        ...(disabled ? {} : { required: `${label} is required.` }),
        minLength: minLen && {
            value: minLen,
            message: `Minimum length of ${minLen} is required.`,
        },
        ...(validateEmail && {
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address.',
            },
        }),
        ...(validatePhone && {
            pattern: {
                value: /^\+?(\d{1,4})?[-. ]?\(?\d{1,}\)?[-. ]?\d{1,}[-. ]?\d{1,}[-. ]?\d{1,}$/,
                message: 'Invalid phone number.',
            },
        }),

        ...(validatePassword && {
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: 'Invalid password. ',
            },
        }),

    }



    return (
        <div className='flex-col text-sm text-[#64728c] m-2' >
            <div className='ml-3'>
                <label className='m-2 text-xs text-[#64728c]'>{label}</label>
            </div>
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                onChange={(e) => setValue(name, e.target.value)}
                disabled={disabled}
                className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start items-center border border-gray-300 rounded-xl outline-none'
                {...register(name, validationRules)}
            />



            <div className='h-1'>
                {errors[name] && (

                    < div className="text-xs text-red-400 font-light ml-4">{errors[name].message}</div>
                )}
            </div>
        </div >
    );
};

export default InputField;
