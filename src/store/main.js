
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSLice = createSlice({
    name: "counter",
    initialState,
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
})
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return { counter: state.counter + 1, showCounter: state.showCounter };
//     }
//     if (action.type === "INCREMENTBY5") {
//         return { counter: state.counter + action.value, showCounter: state.showCounter };
//     }
//     if (action.type === "DECREMENT") {
//         return { counter: state.counter - 1, showCounter: state.showCounter };
//     }
//     if (action.type === "TOGGLE") {
//         return { counter: state.counter, showCounter: !state.showCounter };
//     }
//     return state;
// };
const store = configureStore({
    reducer: counterSLice.reducer
});
export const counterActions = counterSLice.actions
export default store;
