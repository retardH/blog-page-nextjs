import { useMutation } from "@tanstack/react-query";
import { createUser, loginUser } from "@/apis/users";
import { createPost } from "@/apis/posts";

const useUserMutation = () => {
    return useMutation({
        mutationKey: ["post", "users"],
        mutationFn: createUser,
      });
}

const useUserSignInMutation = () => {
  return useMutation({
      mutationKey: ["post", "login"],
      mutationFn: loginUser,
    });
}


export const useUser = () => {   
  return {
    useUserMutation,
    useUserSignInMutation,
  } 
}