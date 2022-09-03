import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API } from "../config";
import axios from "axios";

export const fetchGoodsThunk = createAsyncThunk('goods/fetchGoodsThunk', ()=>{
    const response =   axios.get(URL_API + '/all-products')
        .then(({data})=>{
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
            [fetchGoodsThunk.pending]: (state) => {
                state.status = "loading";
                state.error = null
            },
            [fetchGoodsThunk.fulfilled]: (state, action) => {
                if(action.payload[0]){
                    state.goods = action.payload;
                    state.status = "resolved";
                }
            },
            [fetchGoodsThunk.rejected]: (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            },
        }
});

export const {unitProps} = goodsSlice.actions;
export const goodsState = state => state.dataGoods;
export default goodsSlice.reducer;