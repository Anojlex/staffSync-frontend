import React from 'react'
import UpdateBasicDetails from './UpdateBasicDetails.jsx'
import 'react-image-crop/dist/ReactCrop.css'
import ProfilePic from '../cropper/Profile.jsx';

const BasicDetails = ({ employee, employeeId }) => {

    return (
        <div className='w-full bg-white   p-5 rounded-md shadow-md flex-col'>
            <div >
                <h6 className='text-[#64728c] m-1'>Basic Details</h6>
            </div >
            <hr className='m-1 ' />
            <div className='flex justify-between'>
                <ProfilePic employeeId={employeeId} employee={employee} />
                <UpdateBasicDetails employeeId={employeeId} employeeData={employee} />
            </div>
        </div >
    )
}

export default BasicDetails