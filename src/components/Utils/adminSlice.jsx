import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "adminData",
    initialState: {},
    reducers: {
        addAdmin: (state, action) => {
            return action.payload;
        },
        removeAdmin: (state, action) => {
            return {}
        }
    }
})

export const { addAdmin, removeAdmin } = adminSlice.actions;

export default adminSlice.reducer;