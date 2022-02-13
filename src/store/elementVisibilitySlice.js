import { createSlice } from "@reduxjs/toolkit";


const elementVisibility = createSlice({
    name: "visibility",
    initialState: {
        activeComponent: true,
        activeSort: false,
        selectUnit: "mosaic",
        category: null,
        selectBy: ""
    },
    reducers: {
        hiddenComponent(state, action) {
            state.activeComponent = action.payload;
        },
        selectCategory(state, action) {
            state.selectUnit = action.payload;
        },
        categories(state, action) {
           state.category = action.payload;
        },
        hiddenSort(state, action) {
            state.activeSort = action.payload;
        },
        selectSort(state, action) {
            state.selectBy = action.payload;
        }
    }
});

export const {hiddenComponent,
                    selectAction,
                    categories,
                    hiddenSort, 
                    selectCategory,
                    selectSort,
                } = elementVisibility.actions;
export default elementVisibility.reducer;