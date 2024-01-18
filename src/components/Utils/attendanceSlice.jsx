import { createSlice } from "@reduxjs/toolkit";

const attendanceSlice = createSlice({
    name: "attendanceData",
    initialState: {},
    reducers: {
        addAttendance: (state, action) => {
            return action.payload;
        },
        removeAttendance: (state, action) => {
            return {}
        }
    }
})

export const { addAttendance, removeAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;