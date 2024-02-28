import { configureStore } from "@reduxjs/toolkit";
import countersReducers from "../features/counters/CounterSlice";

const store = configureStore({
  reducer: {
    counters: countersReducers,
  },
});
export default store;
