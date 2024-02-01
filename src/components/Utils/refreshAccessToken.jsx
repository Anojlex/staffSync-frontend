import axiosInstance from "./axiosInstance";


export const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axiosInstance.post('/users/refresh-token', {
            refreshToken: refreshToken
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error; // Re-throw the error to propagate it further
    }
};
