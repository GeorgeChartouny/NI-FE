import baseApi from "./api";

export const getAggData = async ({
  neRequested,
  aggTime,
  datetime_key
}: {
  neRequested: string;
  aggTime: string;
  datetime_key: string;
}) => {
  try {
    const response = await baseApi.post("getData/get-data", {
       neRequested, aggTime, datetime_key ,
    });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
