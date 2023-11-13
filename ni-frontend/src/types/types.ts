export interface DataState {
  data: any[];
  error: boolean;
  isFetching: boolean;
  errorMessage: string;
}

export default interface PostBodyType {
  neRequested: string;
  aggTime: string;
  datetime_key: string;
}
