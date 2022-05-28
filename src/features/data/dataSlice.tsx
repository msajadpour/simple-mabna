import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    symbolNames: [],
    trade:[],
    bidasks:[]
}

export const dataSlice = createSlice({
    name: "dataStore",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.symbolNames = action.payload;
        },
        setTrade: (state, action) => {
            state.trade = action.payload;
        },
        setBidasks: (state, action) => {
            state.bidasks = action.payload;
        },
    }
})

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;