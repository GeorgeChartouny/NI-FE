import { getAggData } from "../api/aggregateDataApi";
import { fetchFailure, fetchStart, setAggData } from "../redux/AggDataRedux";
import { AppDispatch } from "../redux/store";

export const fetchAggData = () => async(dispatch: AppDispatch,AggData:any)=> {
    dispatch(fetchStart());
    try {
        const res = await getAggData(AggData)
        console.log('res.data', res.data);
        dispatch(setAggData(res.data));
    }catch(error:any){
        
        dispatch(fetchFailure(error.Message));
    }
}