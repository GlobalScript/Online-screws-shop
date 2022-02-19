import {createSlice} from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name: 'count_value',
    initialState:{
        count: {},
        subPrice: {},
        totalPrice: 0,
        active: {},
        all: {}
    },
    reducers:{
        add:(state,action) => {
            const articul = action.payload;
            if(state.count[articul] === undefined){
                state.count[articul] = 0;
            } 
            state.count[articul] ++; 
            state.active[articul] = true;
        },
        del:(state,action) => {
            const articul = action.payload;
            if(state.count[articul] > 0) state.count[articul] --; 
            if(state.count[articul] == 0 ){
                state.active[articul] = false;
                delete state.count[articul];
                delete state.subPrice[articul];
            } 
        },
        clear:(state, action) => {
            const articul = action.payload;
            delete state.count[articul];
            state.active[articul] = false;
            delete state.subPrice[articul];

        },
        input:(state, action) => {
           const articul = action.payload.unitID;
           state.count[articul] = action.payload.inpVal;
        },
        sumAllGoods:(state, action) => {
            const units = action.payload;
            Object.keys(state.count).map(item => state.subPrice[item] = state.count[item] * units[item]);
            Object.keys(state.subPrice).reduce((previous, item) => { previous += state.subPrice[item]; return state.totalPrice = previous}, 0);
          },
    } 
});
export const {add, del, clear, input, sumAllGoods} = countSlice.actions;
export const countState = state => state.countGoods;
export default countSlice.reducer;