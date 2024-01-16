import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List } from './List';
import SearchBar from './SearchBar';
import MiniHeader from '../MiniHeader';
import EmployeeCard from './EmployeeCard';
import useFetchEmployee from '../Hooks/useFetchEmployee'; // Make sure the path is correct

const CardContainer = ({ openForm }) => {
    console.log('Rendering CardContainer');
    const navigate = useNavigate();
    const [grid, setGrid] = useState(true);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useFetchEmployee();

    const openEmpDetail = (employeeId) => {
        navigate(`/empDetail/${employeeId}`);
    };

    const toggleView = () => {
        setGrid(!grid);
    };

    const employee = useSelector((state) => state.employee.data);

    const handleSearch = (formData = {}) => {
        const filteredEmployees = employee.filter((employee) => {
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

    return (
        <div className='bg-[#efefef] ml-60 rounded-sm flex-col p-8 mt-6 pt-12 '>
            <div className='bg-[#efefef] sticky top-[64px] '>
                <MiniHeader grid={grid} toggleView={toggleView} openForm={openForm} />
                <SearchBar search={handleSearch} />
            </div>
            <div className='mt-6 flex flex-wrap'>
                {grid ? (
                    filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee, index) => (
                            <EmployeeCard
                                key={index}
                                firstname={employee.firstname}
                                lastname={employee.lastname}
                                image={employee.profileImage ? employee.profileImage : ''}
                                designation={employee.designation}
                                openEmpDetail={() => openEmpDetail(employee._id)}
                            />
                        ))
                    ) : (
                        employee.map((employee, index) => (
                            <EmployeeCard
                                key={index}
                                firstname={employee.firstname}
                                lastname={employee.lastname}
                                image={employee.profileImage ? employee.profileImage : ''}
                                designation={employee.designation}
                                openEmpDetail={() => openEmpDetail(employee._id)}
                            />
                        ))
                    )
                ) : (
                    <List employee={filteredEmployees.length > 0 ? filteredEmployees : employee} />
                )}
            </div>
        </div>
    );
};

export default CardContainer;
