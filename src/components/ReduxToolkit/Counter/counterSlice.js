const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
    increaseByAmount: (state, action) => {
      state += action.payload;
      return state;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease, increaseByAmount } = actions; // named export
export default reducer; // default export
