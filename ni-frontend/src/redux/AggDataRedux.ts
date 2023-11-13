import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import DataState from "../types/types";

const initialState: DataState = {
  data: [],
};

const AggDataSlice = createSlice({
  name: "AggData",
  initialState,
  reducers: {
    setAggData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});
export const { setAggData } = AggDataSlice.actions;
export default AggDataSlice.reducer;
