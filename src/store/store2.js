import { configureStore } from "@reduxjs/toolkit";
import counter2Reducer from "../features/counters2/newSlice";
import postReducers from "../features/posts/postsSlice";

const store2 = configureStore({
  reducer: {
    counters2: counter2Reducer,
    posts: postReducers,
  },
});
export default store2;
