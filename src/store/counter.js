import { createSlice } from "@reduxjs/toolkit";

const counterState = { counter: 0, showCounter: true };
const counterSLice = createSlice({
    name: "counter",
    initialState: counterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        deccrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
});
export const counterActions = counterSLice.actions
export default counterSLice.reducer;