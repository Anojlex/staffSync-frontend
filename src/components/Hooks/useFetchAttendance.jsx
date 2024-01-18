import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { addAttendance } from "../Utils/attendanceSlice";

const useFetchAttendance = (setIsLoading) => {
    const dispatch = useDispatch();

    const fetchAttendanceData = async () => {
        try {
            if (typeof setIsLoading === 'function') {
                setIsLoading(true);
            }
            const response = await axiosInstance.get('/users/attendanceData');
            dispatch(addAttendance(response.data));

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching attendace data:', error);

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchAttendanceData();
    }, []);

    return {};
};

export default useFetchAttendance;
