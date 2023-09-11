import { QueryClient } from "@tanstack/react-query";
import { privateBlogApi } from "./blogApi";

const defaultQueryFunction = async ({ queryKey: [url, data] }) => {
  const { data: data_1 } = await privateBlogApi.get(url, { params: data });
    return data_1;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFunction,
      refetchOnWindowFocus: false,
    },
  },
});
