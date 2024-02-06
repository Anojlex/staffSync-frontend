import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        data: []
    },
    reducers: {
        addEmployee: (state, action) => {
            return action.payload
        },
        removeEmployee: (state, action) => {
            return { data: [] }
        },
    },
});

export const { addEmployee, removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;