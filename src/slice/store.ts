import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice  from "./currentPageSclice";


const store = configureStore({
  reducer: {
            currentPage:currentPageSlice
    },
});

export default store;


