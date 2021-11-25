import { filter } from "./action";
import { createReducer } from "@reduxjs/toolkit";

export const filterReducer = createReducer("", {
  [filter]: (state, { payload }) => {
    return (state = payload);
  },
});
