import { createSlice } from "@reduxjs/toolkit";

const stateValue = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

const newSlice = createSlice({
  name: "counters2",
  initialState: stateValue,
  reducers: {
    incrementby2: (state, action) => {
      const thisIndex = state.findIndex((item) => item.id === action.payload);
      state[thisIndex].value += 2;
    },
    decrementby2: (state, action) => {
      const thisIndex = state.findIndex((item) => item.id === action.payload);
      state[thisIndex].value -= 2;
    },
  },
});
export default newSlice.reducer;
export const { incrementby2, decrementby2 } = newSlice.actions;
