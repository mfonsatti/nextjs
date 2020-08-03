import { configureStore, createStore, combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "./reducers/menuReducer";
import { contentReducer } from "./reducers/contentReducer";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";

const reducers = {
  menu: menuReducer,
  content: contentReducer
};

const makeStore: MakeStore = (context: Context) =>
  createStore(combineReducers(reducers));
export const wrapper = createWrapper(makeStore, { debug: true });
