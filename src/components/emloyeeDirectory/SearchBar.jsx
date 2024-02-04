import React from 'react';
import { useState } from 'react';

const SearchBar = ({ search }) => {
    const [formData, setFormData] = useState({
        employeeId: '',
        name: '',
        designation: '',
    });
    const handleInputChange = (field, e) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        search(formData);
    };

    return (
        <div className='bg-[#efefef] '>
            <form onSubmit={handleSubmit} className='px-3 sm:px-0 ' >
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 mb-6 rounded-md"
                    type='text'
                    placeholder='Employee ID'
                    onChange={(e) => handleInputChange('employeeId', e)}
                />
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 rounded-md"
                    type='text'
                    placeholder='Employee Name'
                    onChange={(e) => handleInputChange('name', e)}
                />
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 rounded-md"
                    type='text'
                    placeholder='Designation'
                    onChange={(e) => handleInputChange('designation', e)}
                />
                <button
                    type="submit"
                    className="outline-none w-64 h-10 text-md m-3 text-white bg-green-400 rounded-md"
                >
                    Search
                </button>
            </form>
        </div >
    );
};

export default SearchBar;
