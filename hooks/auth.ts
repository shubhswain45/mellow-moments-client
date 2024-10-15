import { graphQLClient } from "@/clients/api";
import { loginWithGoogleMutation } from "@/graphql/mutation/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLoginWithGoogle = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async (googleToken: string) => {
            if (!googleToken) {
                throw new Error("Google token not found");
            }

            try {
                const { loginWithGoogle } = await graphQLClient.request(loginWithGoogleMutation, { token: googleToken });
                return loginWithGoogle;
            } catch (error: any) {
                throw new Error(error.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            console.log("Data from hooks", data);

            queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
                getAuthUser: data,
            }));

            router.replace("/home");
            toast.success("Verified successfully");
        },

        onError: (error: any) => {
            console.log(error);
            
            toast.error(error.message);
        }
    });
}