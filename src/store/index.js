import { configureStore } from "@reduxjs/toolkit";
import elementVisibility from './elementVisibilitySlice';

export default configureStore({
    reducer: {
    visibility: elementVisibility,
    },
});