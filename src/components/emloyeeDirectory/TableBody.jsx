import React from 'react'

const TableBody = ({ firstname, lastname, email, employeeId, phone, date, designation, openEmpDetail }) => {
    return (
        <tbody>

            <tr onClick={openEmpDetail} className=' border-gray-100  h-14 cursor-pointer' >
                <td className='py-2 px-3 border-b border-gray-300'>{firstname + " " + lastname}</td>
                <td className='py-2 px-3 border-b border-gray-300'>{employeeId}</td>
                <td className='py-2 px-3 border-b border-gray-300'>{email}</td>
                <td className='py-2 px-3 border-b border-gray-300'>{phone}</td>
                <td className='py-2 px-3 border-b border-gray-300'>{date}</td>
                <td className='py-2 px-3 border-b border-gray-300'>{designation}</td>
            </tr>

        </tbody >
    )
}

export default TableBody