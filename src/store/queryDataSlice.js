import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk('goods/fetchGoods', async function(_, {rejectWithValue}){
    try {
        const response = await fetch('data.json');
    if(!response.ok) throw new Error('Server error');
        const data = await response.json();
    return data;
    }
    catch(error) {
       return rejectWithValue(error.message);
    }
});
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
        }
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.status = "loading";
            state.error = null
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.goods = action.payload;
        },
        [fetchGoods.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

export const {unitProps} = goodsSlice.actions;
export default goodsSlice.reducer;