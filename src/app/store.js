import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../api/booksApi";


export default configureStore({
    reducer: {
        [booksApi.reducerPath] : booksApi.reducer
    }
})