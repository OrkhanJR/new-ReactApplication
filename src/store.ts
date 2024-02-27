import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/slices/counterSlice";
import {  useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedDispatch = useDispatch.withTypes<AppDispatch>();
export const useTypedSelector = useSelector.withTypes<RootState>();

export default store;
