import React, { useState } from 'react';

const ActionForm = ({ setOpen, action, open, leaveAction, setComment, comment }) => {


    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {

        leaveAction(action, comment);
        setComment('')
        setOpen(false);
    };

    return (
        <>
            {open && (
                <div className='w-full h-screen bg-[#3c3a3aaf] flex justify-center items-center absolute top-0'>
                    <div className='flex-col w-[500px] h-40 bg-white shadow-xl rounded-xl p-5 text-[#64728c]'>
                        <div className='m-1 text-sm'>Comment</div>
                        <form>
                            <input
                                type="text"
                                placeholder='Enter comment here'
                                className='w-full border rounded-md h-12 outline-none text-sm pl-2'
                                value={comment}
                                onChange={handleCommentChange}
                            />
                            <div className='flex justify-end'>
                                <button
                                    className="w-16 h-8 bg-red-200 rounded-xl text-red-500 text-xs hover:bg-red-300 m-2"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="w-16 h-8 bg-green-200 rounded-xl text-green-500 text-xs hover:bg-green-300 m-2"
                                >
                                    {action}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ActionForm;
