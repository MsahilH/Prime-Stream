import { configureStore } from "@reduxjs/toolkit";
import hSlice from "./hSlice";

const store = configureStore({
    reducer:{
        home: hSlice,
    },
});

export default store;