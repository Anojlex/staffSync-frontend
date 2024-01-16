import React from 'react'

const ResetButton = ({ isDirty, reset }) => {
    return (
        < button
            className={` rounded-2xl m-2 w-24 h-8 
            ${isDirty ? ' border-2   border-green-400 text-green-400' : 'bg-gray-300 text-white'}
            ${isDirty ? 'hover:border-green-500' : 'bg-gray-300'}`
            }
            type='button'
            onClick={() => { reset() }}
            disabled={!isDirty}
        >
            Cancel
        </button >
    )

}

export default ResetButton