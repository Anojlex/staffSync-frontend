import React from 'react';
import TableBody from './TableBody.jsx';
import { useNavigate } from 'react-router-dom';

export const List = ({ employee }) => {
    const navigate = useNavigate();

    const openEmpDetail = (employeeId) => {
        navigate(`/empDetail/${employeeId}`);
    };
    return (

        <table className='min-w-full bg-white border border-gray-100 shadow-sm rounded-xl overflow-y-auto max-h-[calc(100vh-14rem)] '>
            <thead className='bg-gray-200 '>
                <tr className='bg-gray-300 '>
                    <th className='py-2 px-3 text-left '>Name</th>
                    <th className='py-2 px-3 text-left'>Employee ID</th>
                    <th className='py-2 px-3 text-left'>Email</th>
                    <th className='py-2 px-3 text-left'>Mobile</th>
                    <th className='py-2 px-3 text-left'>Join date</th>
                    <th className='py-2 px-3 text-left'>Role</th>
                </tr>
            </thead>

            {employee.map((employee, index) => (

                <TableBody
                    key={index}
                    firstname={employee.firstname}
                    lastname={employee.lastname}
                    email={employee.email}
                    phone={employee.phone}
                    date={employee.joiningDate}
                    designation={employee.designation}
                    employeeId={employee.empID}
                    openEmpDetail={() => openEmpDetail(employee._id)}
                />

            ))
            }


        </table >

    );
};
