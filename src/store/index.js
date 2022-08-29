import { configureStore } from "@reduxjs/toolkit";
import elementVisibility from './elementVisibilitySlice';
import goodsSlice from './dataSlice';
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
    visibility: elementVisibility,
    dataGoods: goodsSlice,
    countGoods: cartSlice,
    },
});