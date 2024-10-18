import { graphQLClient } from "@/clients/api"
import { ForgotPasswordInput, LoginUserInput, ResetPasswordInput, SignupUserInput, VerifyEmailInput } from "@/gql/graphql"
import { forgotPasswordMutation, loginMutation, loginWithGoogleMutation, logoutMutation, resetPasswordMutation, signupMutation, verifyEmailMutation } from "@/graphql/mutation/auth"
import { getAuthUserQuery } from "@/graphql/query/auth"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const useGetAuthUser = () => {
    return useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            return await graphQLClient.request(getAuthUserQuery)
        }
    })
}

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

            router.replace("/");
            toast.success("Verified successfully");
        },

        onError: (error: any) => {
            toast.error(error.message);
        }
    });
}

export const useSignup = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async (userData: SignupUserInput) => {
            // Check if all required fields are filled
            if (!userData.email || !userData.username || !userData.fullName || !userData.password) {
                throw new Error("Please fill all the fields");
            }

            // Check if the email is valid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userData.email)) {
                throw new Error("Invalid email format.");
            }

            // Check if the password is greater than 6 char
            if (userData.password.length < 6) {
                throw new Error("Password must be at least 6 characters long.");
            }

            try {
                const { signup } = await graphQLClient.request(signupMutation, { input: userData });
                return signup;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
                getAuthUser: data
            }));

            router.replace(`/verify-email/${data?.email}`);
            toast.success("Signup successful! Please verify your email.");
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
};


export const useLogin = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async (userData: LoginUserInput) => {
            // Check if all required fields are filled
            if (!userData.emailOrUsername || !userData.password) {
                throw new Error("Please fill both fields");
            }

            try {
                const { login } = await graphQLClient.request(loginMutation, { input: userData });
                return login;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
                getAuthUser: data
            }));

            toast.success("Login successful!");
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const { logout } = await graphQLClient.request(logoutMutation);
            return logout;
        },

        onSuccess: (data) => {
            queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
                getAuthUser: null
            }));

            toast.success("Logout successful!");
        },
    });
};

export const useVerifyEmail = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (input: VerifyEmailInput) => {
            try {
                const { verifyEmail } = await graphQLClient.request(verifyEmailMutation, { input });
                return verifyEmail;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            queryClient.setQueriesData({ queryKey: ['authUser'] }, () => ({
                getAuthUser: data
            }));
            toast.success("Email verification successful!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}


export const useForgotPassword = () => {
    return useMutation({
        mutationFn: async (input: ForgotPasswordInput) => {
            try {
                const { forgotPassword } = await graphQLClient.request(forgotPasswordMutation, { input });
                return forgotPassword;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Reset link send successful to your Email!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}


export const useResetPassword = () => {
    return useMutation({
        mutationFn: async (input: ResetPasswordInput) => {

            if (input.newPassword != input.confirmPassword) {
                throw new Error("Password does't match.")
            }

            if (input.newPassword.length < 6) {
                throw new Error("Password must be at least 6 characters long.");
            }
            
            try {
                const { resetPassword } = await graphQLClient.request(resetPasswordMutation, { input });
                return resetPassword;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Reset password successful!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}