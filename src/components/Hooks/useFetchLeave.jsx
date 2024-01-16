import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { addLeave } from "../Utils/leaveSlice";

const useFetchLeave = (setIsLoading) => {
    const dispatch = useDispatch();

    const fetchLeaveData = async () => {
        console.log("fetching");
        try {
            if (typeof setIsLoading === 'function') {
                setIsLoading(true);
            }

            const response = await axiosInstance.get('/users/leaveData');
            console.log("ftecched");
            dispatch(addLeave(response.data));

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching leave data:', error);

            if (typeof setIsLoading === 'function') {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        console.log("useeffect callled");
        fetchLeaveData();
    }, []);

    return {};
};

export default useFetchLeave;
