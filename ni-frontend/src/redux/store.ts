import { configureStore } from "@reduxjs/toolkit";
import aggDataReducer from "./AggDataRedux";

//configure the store 
export const store = configureStore({
    reducer:{
        data:aggDataReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;