import { graphQLClient } from "@/clients/api";
import { CreatePostInput } from "@/gql/graphql";
import { createPostMutation } from "@/graphql/mutation/post";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePost = () => {
    return useMutation({
        mutationFn: async (input: CreatePostInput) => {
            try {                
                const { createPost } = await graphQLClient.request(createPostMutation, { input });
                return createPost;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            // queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
            //     getAuthUser: data
            // }));
            toast.success("Post created successfullly");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}