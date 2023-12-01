import { getAggData } from "../api/aggregateDataApi";
import { fetchFailure, fetchStart, setAggData } from "./AggDataRedux";
import { AppDispatch } from "./store";

export const fetchAggData = async (
  dispatch: AppDispatch,
  {
    neRequested,
    aggTime,
    time_stampFrom,
    time_stampTo
  }: {
    neRequested: string;
    aggTime: string;
    time_stampFrom: string | null;
    time_stampTo: string | null;
  }
) => {
  dispatch(fetchStart());
  try {
    const res = await getAggData({ neRequested, aggTime, time_stampFrom,time_stampTo });
    // console.log("res ==>", res);
    if (res && (res.status === 400 || res.message)) {
      dispatch(fetchFailure(res.message));
    } else {
      dispatch(setAggData(res));
    }
  } catch (error: any) {
    dispatch(fetchFailure(error.Message));
  }
};
