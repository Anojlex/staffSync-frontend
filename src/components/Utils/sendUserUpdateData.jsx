import axiosInstance from "./axiosInstance";
import { toast } from 'react-toastify';



export const sendUserUpdateData = (changedValues, reset, dispatch, addEmployee) => {

    axiosInstance.patch('/users/update-details', changedValues)

        .then(response => {
            console.log("data is", response.data);
            dispatch(addEmployee(response.data));
            reset()
            toast.success('Saved successfully!', {
                position: 'bottom-left',
                autoClose: 3000,

            });
        })
        .catch(error => {

            toast.error('Failed to save. Please try again.', {
                position: 'bottom-left',
                autoClose: 3000, // milliseconds
                style: {
                    minWidth: '200px', // Adjust the minimum width
                    backgroundColor: '#ff6b6b', // Customize background color
                },
            });
        });
}