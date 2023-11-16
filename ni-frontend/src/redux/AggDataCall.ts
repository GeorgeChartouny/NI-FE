import { getAggData } from "../api/aggregateDataApi";
import { fetchFailure, fetchStart, setAggData } from "./AggDataRedux";
import { AppDispatch } from "./store";

export const fetchAggData = async (
  dispatch: AppDispatch,
  {
    neRequested,
    aggTime,
    time_stamp,
  }: {
    neRequested: string;
    aggTime: string;
    time_stamp: string | null;
  }
) => {
  dispatch(fetchStart());
  try {
    const res = await getAggData({ neRequested, aggTime, time_stamp });
    console.log("res", res);
    if (res.status === 400) {
      dispatch(fetchFailure(res.title));
    } else {
      dispatch(setAggData(res));
    }
  } catch (error: any) {
    dispatch(fetchFailure(error.Message));
  }
};
