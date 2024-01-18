import React from 'react'

const Absent = ({ attendance, changedate, date }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;
    return (
        <div className='bg-white rounded-xl shadow-md w-80 h-[370px] p-2 m-4 '>
            <div className='flex justify-center text-sm  text-[#64728c] h-10 font-mono pt-2 '>
                <img onClick={() => changedate("prev")} className=" w-4 h-4 mt-1 mr-5 cursor-pointerr" src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-left' />
                {date}
                <img onClick={() => changedate("next")} className="w-4 h-4 mt-1 ml-5 cursor-pointer " src='https://img.icons8.com/tiny-glyph/32/737373/circled-chevron-right' />
            </div>
            <div className='bg-[#9ea6b760] h-[310px] p-1 overflow-y-auto max-h-[calc(100vh-14rem)]' style={{ ' - ms - overflow - style': 'none', scrollbarWidth: 'none' }}>
                {attendance?.absent?.map((att) => (
                    <>
                        <div className="bg-white h-8 flex justify-between rounded-md p-2 text-sm font-mono text-red-600 mt-1" key={att._id}>
                            <div>{att.firstname}</div>
                            <div>{att.empID}</div>
                        </div>
                        <div className="bg-white h-8 flex justify-between rounded-md p-2 text-sm font-mono text-red-600 mt-1" key={att._id}>
                            <div>{att.firstname}</div>
                            <div>{att.empID}</div>
                        </div>
                        <div className="bg-white h-8 flex justify-between rounded-md p-2 text-sm font-mono text-red-600 mt-1" key={att._id}>
                            <div>{att.firstname}</div>
                            <div>{att.empID}</div>
                        </div>
                    </>
                ))}
            </div >

        </div >



    )
}

export default Absent