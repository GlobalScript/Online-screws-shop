import { createSlice } from "@reduxjs/toolkit";

const elementVisibility = createSlice({
    name: "visibility",
    initialState: {
        status: true,
        selectUnit: "mosaic"
    },
    reducers: {
        status(state, action){
            state.status = action.payload;
        },
        selectAction(state, action) {
            state.selectUnit = action.payload;
        }
    }
});

export const {status, selectAction} = elementVisibility.actions;
export default elementVisibility.reducer;