import { getAggData } from "../api/aggregateDataApi";
import { fetchFailure, fetchStart, setAggData } from "./AggDataRedux";
import { AppDispatch } from "./store";

export const fetchAggData =  async(dispatch: AppDispatch,{
    neRequested,
    aggTime,
    datetime_key,
  }: {
    neRequested: string;
    aggTime: string;
    datetime_key: string;
  })=> {
    dispatch(fetchStart(aggTime));
    try {
       
        const res = await getAggData({neRequested,aggTime,datetime_key});
        console.log('res', res);
        dispatch(setAggData(res));
    }catch(error:any){
        
        dispatch(fetchFailure(error.Message));
    }
}