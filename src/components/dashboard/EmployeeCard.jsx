import React from 'react'


const EmployeeCard = ({ firstname, lastname, avatar, designation, openEmpDetail }) => {



    return (
        <div onClick={openEmpDetail} className='bg-white h-48 w-64 m-3 pt-7 rounded-lg text-[#64728c] flex-col shadow-lg justify-items-center cursor-pointer' >

            <div className='flex justify-center '>

                <div className='flex justify-center items-center rounded-full w-20 h-20  bg-white '>

                    <img className=" w-18 h-18 rounded-full"
                        src={(avatar ? avatar : "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-HD-Image.png")} alt='' />
                </div>

            </div>
            <div className='text-center text-md font-semibold mt-2'>{firstname + " " + lastname}</div>
            <div className=' text-center text-sm'>{designation}</div>

        </div >
    )
}

export default EmployeeCard