import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {DataState} from "../types/types";

const initialState: DataState = {
  data: [],
  error: false,
  isFetching: false,
  errorMessage: "",
  aggTime: "",

};

// initialize a reducer for the aggregated data
const AggDataSlice = createSlice({
  name: "AggData",
  initialState,
  reducers: {
    //on start of the fetch process
    fetchStart: (state) => {
      state.isFetching = true;
    
    },
    // pass in the body in the payload
    setAggData: (state, action: PayloadAction<any[]>) => {
      state.isFetching = false;
      state.data = action.payload;
    },
    // on fetching error encoutering 
    fetchFailure: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});
export const { fetchStart, setAggData, fetchFailure } = AggDataSlice.actions;
export default AggDataSlice.reducer;
