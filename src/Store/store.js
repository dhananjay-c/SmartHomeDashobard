import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../Reducers/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
    }
})


export default store