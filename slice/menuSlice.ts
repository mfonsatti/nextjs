import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../types";

const initialState: MenuItem[] = [];

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu(state, action: PayloadAction<MenuItem[]>) {
      console.log("action", action);
      state = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
