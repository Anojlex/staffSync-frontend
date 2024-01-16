import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
    name: "leaveData",
    initialState: {},
    reducers: {
        addLeave: (state, action) => {
            return action.payload;
        },
        removeLeave: (state, action) => {
            return {}
        }
    }
})

export const { addLeave, removeLeave } = leaveSlice.actions;

export default leaveSlice.reducer;