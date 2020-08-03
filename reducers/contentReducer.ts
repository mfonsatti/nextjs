import { AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { MenuItem } from "../types";

const initialState = {};

export const contentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload.content };
    case "SET_CONTENT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
