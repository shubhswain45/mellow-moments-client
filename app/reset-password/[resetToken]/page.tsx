"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, Input, Spinner } from "@chakra-ui/react";
import { useGetAuthUser, useResetPassword } from "@/hooks/auth";
import { useParams, useRouter } from "next/navigation";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter()
    const { data, isLoading } = useGetAuthUser();
    const { mutate: resetPassword, isPending } = useResetPassword();


    const { resetToken } = useParams();
    const token = Array.isArray(resetToken) ? resetToken[0] : resetToken;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetPassword({ token, newPassword: password, confirmPassword });
    };

    // Redirect if the user is already verified
    useEffect(() => {
        if (data?.getAuthUser && !isLoading && data?.getAuthUser.isVerified) {
            router.replace("/home"); // Redirect to home
        }
    }, [data, isLoading, router]);

    // Show loading spinner while user data is loading or redirecting
    if (isLoading || (data?.getAuthUser && data?.getAuthUser.isVerified)) {
        return (
            <Flex minH="100vh" justifyContent="center" alignItems="center">
                <Spinner size="xl" color="teal.500" />
            </Flex>
        );
    }
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='max-w-md w-full bg-[#1c1c1c] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
            >
                <div className='p-8'>
                    <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r text-white text-transparent bg-clip-text'>
                        Reset Password
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <Input
                            type='password'
                            placeholder='New Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            mt={4} // Added margin-top
                        />

                        <Input
                            type='password'
                            placeholder='Confirm New Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            mt={4} // Added margin-top
                        />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#e1e3e2] text-black font-bold py-3 px-4 rounded-full mt-8 shadow-lg hover:bg-[#c2c2c2] focus:outline-none focus:ring-2 focus:ring-[#7ea9cf] focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {isPending ? "Resetting..." : "Set New Password"}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPasswordPage;
