import React from 'react'

const ProfileField = ({ label, field }) => {
    return (
        <div className='m-1'>
            <label className='m-2 text-xs text-[#64728c]'>{label}</label>
            <div className='m-2 h-10 w-60 text-[#5f6a7e] pl-3 text-sm flex justify-start
             items-center border border-black-2px  rounded-lg'>{field}</div>
        </div>
    )
}

export default ProfileField