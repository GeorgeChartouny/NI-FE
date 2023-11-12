import { QueryClient, useMutation } from "react-query";
import { AggData } from "./Interfaces/AggData";
import { getAggData } from "./api/aggregateDataApi";

export const useGetAggData = () => {
  const queryClient = new QueryClient();

  // using use mutation instead of useQuery since I am doing a post request
  return useMutation<string, unknown, AggData, unknown>(
    async (formData: AggData) => {
      const result = await getAggData(formData);
      return result;
    },
    {
      onSuccess: (data: any) => {
        queryClient.invalidateQueries("queryAggData");
        console.log("Data fetched successfully");
      },
      onError: (error: any) => {
        console.log("Error fetching data: " + error.message);
      },
    }
  );
};
