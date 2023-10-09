import { useMutation } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { privateBlogApi } from "./blogApi";

export const useCreatePost = () =>
  useMutation({
    mutationFn: (payload) => {
      return privateBlogApi
        .post(`/createPost`, payload)
        .then(({ data }) => data);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [`/getall`],
      }),
  });
