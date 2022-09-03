import { createSlice } from "@reduxjs/toolkit";

const elementVisibility = createSlice({
    name: "visibility",
    initialState: {
        activeComponent: true,
        activeSort: false,
        activeSearch: true,
        selectUnit: "mosaic",
        category: null,
        selectBy: "",
        currentPage: 1,
        numActivePage: 0,
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
        },
        searchPage(state, action) {
            state.activeSearch = action.payload;
        },
        numberCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setActivePage(state, action){
            state.numActivePage = action.payload;
        }
    }
});

export const {hiddenComponent,
                    selectAction,
                    categories,
                    hiddenSort, 
                    selectCategory,
                    selectSort,
                    searchPage,
                    numberCurrentPage,
                    setActivePage
                } = elementVisibility.actions;
export default elementVisibility.reducer;