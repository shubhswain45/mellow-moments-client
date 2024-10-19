"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Flex, Input, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useForgotPassword, useGetAuthUser } from "@/hooks/auth";
import { useRouter } from "next/navigation";


const ForgotPasswordPage = () => {
    const [emailOrUsername, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter()

    const { data, isLoading } = useGetAuthUser();
    const { mutate: forgotPassword, isPending, isSuccess } = useForgotPassword();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleForgotPassword();
    };

    const handleForgotPassword = async () => {
        forgotPassword({ emailOrUsername });
    };

    useEffect(() => {
        if (isSuccess) {
            setIsSubmitted(true);
        }
    }, [isSuccess])

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
                className='max-w-md w-full bg-[#161617] backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
            >
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r text-white text-transparent bg-clip-text">
                        Forgot Password
                    </h2>

                    {isPending ? (
                        <div className="flex justify-center items-center my-6">
                            <Loader className="size-6 animate-spin text-white" />
                        </div>
                    ) : !isSubmitted ? (
                        <form onSubmit={handleSubmit}>
                            <p className="text-gray-300 mb-6 text-center">
                                Enter the email or username associated with your account to change your password.
                            </p>
                            <Input
                                type="text"
                                placeholder="Email or Username"
                                value={emailOrUsername}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#e1e3e2] text-black font-bold py-3 px-4 rounded-full mt-8 shadow-lg hover:bg-[#c2c2c2] focus:outline-none focus:ring-2 focus:ring-[#7ea9cf] focus:ring-opacity-50 disabled:opacity-50"
                            >
                                Send Reset Link
                            </motion.button>

                        </form>
                    ) : (
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <Mail className="h-8 w-8 text-white" />
                            </motion.div>
                            <p className="text-gray-300 mb-6">
                                If an account exists for {emailOrUsername}, you will receive a password reset link to your email shortly.
                            </p>
                        </div>
                    )}
                </div>

                <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
                    <Link href="/" className="text-sm text-white hover:underline flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Root page
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgotPasswordPage;
