import baseApi from "./api";

export const getAggData = async ({
  neRequested,
  aggTime,
  time_stampFrom,
  time_stampTo
}: {
  neRequested: string;
  aggTime: string;
  time_stampFrom: string | null;
  time_stampTo: string | null;
}) => {
  try {
    const response = await baseApi.post("getData/get-data", {
       neRequested, aggTime, time_stampFrom,time_stampTo ,
    });
    return response.data;
  } catch (error: any) {
    return error;
  }
};
