import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ConnectContainer = () => {
    const [roomId, setRoomId] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomId === "") {
            setError("Room ID is required")
        } else {
            setError("");
            navigate(`/room/${roomId}`);
        }

    }

    return (
        <div className=' md: bg-[#e6e4ef] h-screen sm:ml-60 rounded-sm flex justify-center items-center p-8 mt-6 pt-12'>
            <div className='flex justify-center items-center w-[100%] h-[50%] sm:w-[60%] sm:h-[80%] bg-white rounded-lg '>
                <form onSubmit={handleSubmit} className='flex flex-col w-1/2 ' >
                    <div className='flex justify-center m-2 font-bold text-gray-700'><h1>Connect With Team</h1></div>
                    <input onChange={e => setRoomId(e.target.value)} type="text" placeholder="Enter room ID" className='p-2 m-3 border-2 border-gray-300 rounded-md outline-none' />
                    <button type="submit" className='p-2 m-3 bg-orange-500 hover:bg-orange-400 text-white rounded-md'>Connect</button>
                    <div className='flex justify-center m-2  text-red-600'><h1>{error}</h1></div>
                </form>
            </div>
        </div >
    )
}

export default ConnectContainer