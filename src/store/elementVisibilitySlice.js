import { createSlice } from "@reduxjs/toolkit";

const elementVisibility = createSlice({
    name: "visibility",
    initialState: {
        hidden: true,
        selectUnit: "mosaic",
        category: null,
    },
    reducers: {
        hidden(state, action) {
            state.hidden = action.payload;
        },
        selectAction(state, action) {
            state.selectUnit = action.payload;
        },
        categories(state, action) {
           state.category = action.payload;
        }
    }
});

export const {hidden, selectAction, categories} = elementVisibility.actions;
export default elementVisibility.reducer;