import React from 'react'

function Button({ isDirty, }) {
    return (
        < button
            className={` rounded-3xl text-white m-2 w-24 h-8 
                 ${isDirty ? ' bg-green-400' : 'bg-gray-300'}
                 ${isDirty ? 'hover:bg-green-500' : 'bg-gray-300'}`}
            type='submit'
            disabled={!isDirty}
        >

            Save
        </button >
    )
}

export default Button

