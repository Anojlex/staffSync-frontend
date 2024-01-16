import React from 'react'

const TableBody = ({ firstname, lastname, email, employeeId, phone, date, designation }) => {
    return (
        <tbody>

            <tr className=' border-gray-100  h-14 ' >
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