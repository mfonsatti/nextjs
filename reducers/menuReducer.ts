import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { MenuItem } from "../types";
import {HYDRATE} from 'next-redux-wrapper';

const initialState: MenuItem[] = [];

export const menuReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return [...state, ...action.payload.menu];
        case 'SET_MENU':
            return [...state, ...action.payload];
        default:
            return state;
    }
};
