import { createSlice } from "@reduxjs/toolkit";

const elementVisibility = createSlice({
    name: "visibility",
    initialState: {
        hidden: true,
        selectUnit: "mosaic"
    },
    reducers: {
        hidden(state, action){
            state.hidden = action.payload;
        },
        selectAction(state, action) {
            state.selectUnit = action.payload;
        }
    }
});

export const {hidden, selectAction} = elementVisibility.actions;
export default elementVisibility.reducer;