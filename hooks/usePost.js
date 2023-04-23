import { createPost, getPosts } from "@/apis/posts"
import { useMutation, useQuery } from "@tanstack/react-query"

const usePostMutation = () => {
    return useMutation({
      mutationKey: ["create", "post"],
      mutationFn: createPost,
    })
}

const useGetPost = () => {
    return useQuery({
        queryKey: ["get", "posts"],
        queryFn: getPosts,
    })
}


export const usePost = () => {
    return {
        usePostMutation,
        useGetPost,
    }
}