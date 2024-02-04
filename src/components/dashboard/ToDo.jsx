import React from 'react'

const ToDo = () => {
    return (
        <div className='bg-white rounded-xl shadow-sm w-[30%] h-[500px] p-2  mt-3 m-1'>
            <div className='flex justify-center  h-10 text-[#64728c]  pt-2 '>

                <div className='w-20 flex justify-center'> To Do</div>

            </div>
            <div className='bg-white h-[400px] p-1 overflow-y-auto max-h-[calc(100vh-14rem)]' style={{
                scrollbarWidth: 'none'
            }}>



            </div >

        </div >

    )
}

export default ToDo