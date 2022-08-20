import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGoods = createAsyncThunk('goods/fetchGoods', ()=>{
    const response =   axios.get('http://localhost:3001/api/all-products')
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