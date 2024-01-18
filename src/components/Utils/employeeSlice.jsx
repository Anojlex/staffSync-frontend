import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: { data: [] },
    reducers: {

        addEmployee: (state, action) => {

            return action.payload;

        },
        removeEmployee: (state, action) => {
            return [];
        },
    },
});

export const { startLoading, addEmployee, removeEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
