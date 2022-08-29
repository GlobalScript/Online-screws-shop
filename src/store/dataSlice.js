import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../config/config";
import axios from "axios";
import { getCartThunk } from "./cartSlice";

export const fetchGoods = createAsyncThunk('goods/fetchGoods', (_, {dispatch})=>{
    const response =   axios.get(URL_API + '/all-products')
        .then(({data})=>{
            dispatch(getCartThunk());
            return data;
        })
        .catch((e)=>{
            console.log(e.message);
            return [];
        })
            return response;
    }
);

const goodsSlice = createSlice({
        name: "goods",
        initialState: {
            goods: [],
            unit: {},
            status: null,
            error: null,
        },
        reducers: {
            unitProps(state, action) {
                state.unit = action.payload;
            },
        },
        extraReducers: {
            [fetchGoods.pending]: (state) => {
                state.status = "loading";
                state.error = null
            },
            [fetchGoods.fulfilled]: (state, action) => {
                if(action.payload[0]){
                    state.goods = action.payload;
                    state.status = "resolved";
                }
            },
            [fetchGoods.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },
        }
});

export const {unitProps} = goodsSlice.actions;
export const goodsState = state => state.dataGoods;
export default goodsSlice.reducer;