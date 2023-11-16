import baseApi from "./api";

export const getAggData = async ({
  neRequested,
  aggTime,
  time_stamp
}: {
  neRequested: string;
  aggTime: string;
  time_stamp: string | null;
}) => {
  try {
    const response = await baseApi.post("getData/get-data", {
       neRequested, aggTime, time_stamp ,
    });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
