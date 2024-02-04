import React from 'react'
import { useState } from 'react';




const SearchLeave = ({ search }) => {
    const [formData, setFormData] = useState({
        fromDate: '',
        toDate: '',
        name: '',
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
        <div className='bg-white  rounded-md p-2 pt-6 mt-10 flex-col sm:h-48' >
            < div className='ml-4 text-[#64728c]' > Search Leave</div >
            <hr />
            <form className="mt-4 flex flex-wrap " onSubmit={handleSubmit}>
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 rounded-md border text-[#64728c]"
                    type='date'
                    placeholder='From '
                    onChange={(e) => handleInputChange('fromDate', e)}
                />
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 rounded-md border text-[#64728c]"
                    type='date'
                    placeholder='To '
                    onChange={(e) => handleInputChange('toDate', e)}
                />
                <input
                    className="outline-none pl-3 w-64 h-10 text-sm m-3 rounded-md border"
                    type='text'
                    placeholder='Employee Name'
                    onChange={(e) => handleInputChange('name', e)}
                />
                <button
                    type="submit"
                    className="outline-none w-64 h-10 text-md m-3 text-white bg-green-400 rounded-md"
                >
                    Search
                </button>
            </form>
        </div >
    )
}

export default SearchLeave