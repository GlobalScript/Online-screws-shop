import { configureStore } from "@reduxjs/toolkit";
import elementVisibility from './elementVisibilitySlice';
import goodsSlice from './queryDataSlice';

export default configureStore({
    reducer: {
    visibility: elementVisibility,
    goods: goodsSlice
    },
});