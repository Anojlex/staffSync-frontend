import React from 'react'

const MiniHeader = ({ grid, toggleView, openForm }) => {




    return (
        <div className='flex justify-between w-ful mb-4 bg-[#efefef]  '>

            <div className='flex-col'>
                <div className='text-gray-600 text-xl font-medium m-3'>Empoloyee</div>
                <div className='text-gray-500 ml-3 text-sm'>Empoloyee/Dashboard</div>
            </div>

            <div className='flex ml-auto'>
                {grid ?
                    < div className='bg-white shadow-md rounded-md p-1 h-8 w-8 m-2 hover:bg-gray-100 cursor-pointer' > <img className='w-6 h-6' src="https://img.icons8.com/fluency-systems-filled/48/grid.png" alt=""></img></div>
                    : <div onClick={toggleView} className='bg-white shadow-md rounded-md p-1 h-8 w-8 m-2 cursor-pointer'><img className='w-6 h-6' src="https://img.icons8.com/sf-black-filled/64/737373/grid.png" alt=""></img></div>}
                {grid ?
                    <div onClick={toggleView} className='bg-white shadow-md rounded-md p-1 h-8 w-8 m-2 cursor-pointer'><img className='w-6 h-6' src="https://img.icons8.com/ios-glyphs/30/737373/list--v1.png" alt=""></img></div>
                    : <div className='bg-white shadow-md rounded-md p-1 h-8 w-8 m-2 '> <img className='w-6 h-6' src="https://img.icons8.com/windows/32/list.png" alt=""></img></div>
                }
                <button onClick={openForm} className='bg-orange-400 w-40 m-2 h-10 text-white text-sm font-medium rounded-3xl'>Add Employee</button>
            </div>
        </div >
    )
}

export default MiniHeader