import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { addEmployee } from "../Utils/employeeSlice";
import { useSelector } from "react-redux";
const useFetchEmployee = (setIsLoading) => {
    const dispatch = useDispatch();

    const fetchEmployeeData = async () => {
        try {
            if (typeof setIsLoading === 'function') {
                setIsLoading(true);
            }

            const response = await axiosInstance.get('/users/employeeData');
            dispatch(addEmployee(response.data));

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching employee data:', error);

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    return {};
};

export default useFetchEmployee;
