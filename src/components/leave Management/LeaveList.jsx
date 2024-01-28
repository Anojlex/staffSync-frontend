import React from 'react';
import useFetchLeave from '../Hooks/useFetchLeave';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import LoadingSpinner from '../Spinner';
import TableHeading from './TableHeading';
import SearchLeave from './SearchLeave';


const LeaveList = ({ setOpen, setAction, setLeaveId, setComment }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [filteredLeave, setFilteredLeave] = useState([])

    useFetchLeave(setIsLoading);

    const convertToDDMMYYYY = (inputDate) => {
        const dateParts = inputDate.split("-");
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        return `${day}-${month}-${year}`;
    };
    const leaveData = useSelector((state) => state.leave.data) || [];

    const handleSearch = (formData = {}) => {
        const { name, fromDate, toDate } = formData;

        const filteredLeave = leaveData.filter((leave) => {
            const fullName = `${leave.employeeId.firstname} ${leave.employeeId.lastname}`
                .toLowerCase()
                .trim();

            const nameMatch =
                !name ||
                name
                    .toLowerCase()
                    .trim()
                    .split(' ')
                    .every((term) => fullName.includes(term));

            const fromDateMatch =
                !fromDate || new Date(leave.fromDate) >= new Date(convertToDDMMYYYY(fromDate));

            const toDateMatch =
                !toDate || new Date(leave.toDate) <= new Date(convertToDDMMYYYY(toDate));

            if (name && fromDate && toDate) {
                return nameMatch && fromDateMatch && toDateMatch;
            } else if (name && !fromDate && !toDate) {
                return nameMatch;
            } else if (!name && fromDate && toDate) {
                return fromDateMatch && toDateMatch;
            } else if (!name && !fromDate && !toDate) {
                return true;
            }
            return false;
        });


        setFilteredLeave(filteredLeave);
    };

    return (
        <div className='bg-[#f4f3f9] h-full ml-60 rounded-sm flex-col p-8 mt-6 pt-12'>

            < SearchLeave search={handleSearch} />
            {isLoading ? (
                <div className='flex justify-center pr-36 '>
                    <LoadingSpinner />
                </div>
            ) : (
                <div className='bg-white rounded-sm flex-col  mt-6 rounded-t-3xl text-[#64728c] shadow-md '>
                    <div className='bg-white h-16 rounded-t-3xl text-sm  text-[#64728c] p-6'>
                        ({filteredLeave.length > 0 ? filteredLeave.length : leaveData.length})Records found</div>

                    <div className='flex items-center bg-slate-300 h-10 m-3 text-xs font-sans-regular rounded-t-md text-[#506181] '>
                        <div className='flex-1 px-3 text-center'>Date of Application</div>
                        <div className='flex-1 px-3 text-center'>Employee</div>
                        <div className='flex-1 px-3 text-center'>Type</div>
                        <div className='flex-1 px-3 text-center'>From Date</div>
                        <div className='flex-1 px-3 text-center'>To Date</div>
                        <div className='flex-1 px-3 text-center'>No of Days</div>
                        <div className='flex-1 px-3 text-center'>Reason</div>
                        <div className='flex-1 px-3 text-center'>Comment</div>
                        <div className='flex-1 px-3 text-center'>Status</div>
                        <div className='flex-1 px-6 text-center'>Action</div>
                    </div>

                    <div className='overflow-y-auto max-h-[calc(100vh-14rem)]' >
                        {
                            filteredLeave.length > 0 ? (
                                filteredLeave.map((leave, index) => (
                                    <TableHeading
                                        key={index}
                                        leave={leave}
                                        id={leave._id}
                                        setOpen={setOpen}
                                        setAction={setAction}
                                        setLeaveId={setLeaveId}
                                        setComment={setComment}
                                    />
                                ))
                            ) : (
                                leaveData.map((leave, index) => (
                                    <TableHeading
                                        key={index}
                                        leave={leave}
                                        id={leave._id}
                                        setOpen={setOpen}
                                        setAction={setAction}
                                        setLeaveId={setLeaveId}
                                        setComment={setComment}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
            )
            }
        </div >
    )

}
export default LeaveList;
