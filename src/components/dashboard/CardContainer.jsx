import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List } from './List';
import SearchBar from './SearchBar';
import MiniHeader from './MiniHeader';
import EmployeeCard from './EmployeeCard';
import useFetchEmployee from '../Hooks/useFetchEmployee';
import LoadingSpinner from '../Spinner';

const CardContainer = ({ openForm }) => {



    const navigate = useNavigate();
    const [grid, setGrid] = useState(true);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const employee = useSelector((state) => state.employee.data) || [];

    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);
    useFetchEmployee(setIsLoading)
    console.log(isLoading);
    const openEmpDetail = (employeeId) => {
        navigate(`/empDetail/${employeeId}`);
    };

    const toggleView = () => {
        setGrid(!grid);
    };

    const handleSearch = (formData = {}) => {
        const filteredEmployees = employee?.filter((employee) => {
            const fullName = `${employee.firstname} ${employee.lastname}`
                .toLowerCase()
                .trim();
            const searchTerms = formData.name.toLowerCase().trim().split(' ');
            return searchTerms.every((term) => fullName.includes(term));
        });
        setFilteredEmployees(filteredEmployees);
    };

    const resetSearch = () => {
        setFilteredEmployees([]);
    };
    const employeesToDisplay = filteredEmployees.length > 0 ? filteredEmployees : employee;

    if (!Array.isArray(employeesToDisplay)) {
        // If employeesToDisplay is not an array, handle it appropriately
        console.error('Employees is not an array:', employeesToDisplay);
        return null; // or render an error message
    }

    return (
        <div className='bg-[#efefef] ml-60 rounded-sm flex-col p-8 mt-6 pt-12 '>
            <div className='bg-[#efefef] sticky top-[64px] '>
                <MiniHeader grid={grid} toggleView={toggleView} openForm={openForm} />
                <SearchBar search={handleSearch} />
            </div>

            {
                !employee || isLoading ? (
                    <div className='flex justify-center pr-36 '> <LoadingSpinner /></div>
                ) : (
                    <div className='mt-6 flex flex-wrap overflow-y-auto max-h-[calc(100vh-14rem)]'>
                        {
                            grid ? (

                                employeesToDisplay.map((employee, index) => (
                                    <EmployeeCard
                                        key={index}
                                        firstname={employee.firstname}
                                        lastname={employee.lastname}
                                        avatar={employee.avatar}
                                        designation={employee.designation}
                                        openEmpDetail={() => openEmpDetail(employee._id)}
                                    />
                                ))

                            ) : (
                                <List employee={filteredEmployees.length > 0 ? filteredEmployees : employee} />
                            )}
                    </div>
                )
            }
        </div >
    );
};

export default CardContainer;
