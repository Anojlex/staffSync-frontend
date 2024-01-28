import React from 'react'
import { useSelector } from 'react-redux'
import BasicDetails from './BasicDetails';
import Education from './Education';
import Address from './Address';
import Experience from './Experience';
import EmergencyContact from './EmergencyContact';
import OtherInfo from './OtherInfo';
import Salary from './Salary';
const Profile = ({ employeeId, openForm }) => {


    const employee = useSelector(state => {
        return state.employee.data.find(emp => emp._id === employeeId) || null;
    });



    return (
        <div className='bg-[#efefef] ml-60 rounded-sm flex-col p-8 mt-6 pt-12 '>

            <BasicDetails employee={employee} openForm={openForm} employeeId={employeeId} />
            <Address employeeId={employeeId} />
            <Education employee={employee} employeeId={employeeId} />
            <Experience employeeId={employeeId} />
            <Salary employeeId={employeeId} />
            <EmergencyContact employeeId={employeeId} />
            <OtherInfo employeeId={employeeId} />
        </div >
    )
}

export default Profile