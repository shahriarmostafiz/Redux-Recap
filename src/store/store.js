import { configureStore } from "@reduxjs/toolkit";
import countersReducers from "../features/counters/CounterSlice";
import postReducers from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: countersReducers,
    posts: postReducers,
  },
});
export default store;
