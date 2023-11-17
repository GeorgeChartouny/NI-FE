export interface DataState {
  data: any[];
  error: boolean;
  isFetching: boolean;
  errorMessage: string;
  aggTime:string;
}

export interface PostBodyType {
  neRequested: string;
  aggTime: string;
  datetime_key: string;
}

export  interface ChartDataType {
time: string;
kpi:number;
neValue:string;
}
export interface FormattedData {
  name: string;
  data: { time: string; kpi: number }[];
}
export interface ChartData {
  time: string;
  kpi: number;
  neValue: string;
}

export interface DTPickerInterface {
  onDateSelect: (date:string| null) => void;   
 }