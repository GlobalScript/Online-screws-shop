import { configureStore } from "@reduxjs/toolkit";
import elementVisibility from './elementVisibilitySlice';
import goodsSlice from './dataSlice';
import countSlice from "./countSlice";

export default configureStore({
    reducer: {
    visibility: elementVisibility,
    dataGoods: goodsSlice,
    countGoods: countSlice,
    },
});