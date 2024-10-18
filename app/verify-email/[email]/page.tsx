"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Flex, Spinner } from "@chakra-ui/react";
import { NoUnusedFragmentsRule } from "graphql";
import { useGetAuthUser, useVerifyEmail } from "@/hooks/auth";

const EmailVerificationPage: React.FC = () => {
    // State variables
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null)); // Initialize refs array
    const router = useRouter();

    // Hooks for authentication and verification
    const { data, isLoading } = useGetAuthUser();
    const { mutate: verifyEmail, isPending } = useVerifyEmail();
    const { email: encodedEmail } = useParams<{ email: string | string[] }>();

    // Ensure email is a string
    const email = Array.isArray(encodedEmail) ? encodedEmail[0] : encodedEmail; // Take the first string if it's an array
    const decodedEmail = decodeURIComponent(email); // Decode the email parameter

    // Handle input changes for the verification code
    const handleChange = (index: number, value: string) => {
        const newCode = [...code];

        // Handle pasted code or single character input
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for (let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);
            focusNextInput(newCode);
        } else {
            newCode[index] = value;
            setCode(newCode);
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    // Handle keydown events for the inputs
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Handle verification click
    const handleVerifyClick = async () => {
        const verificationCode = code.join("");
        try {
            verifyEmail({ code: verificationCode, email: decodedEmail }); // Use decoded email
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("An unexpected error occurred");
            }
        }
    };

    // Focus the next input after pasting or filling in
    const focusNextInput = (newCode: string[]) => {
        const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
        const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
        inputRefs.current[focusIndex]?.focus();
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
            <div className="max-w-md w-full rounded-lg overflow-hidden bg-[#161617]" >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 w-full max-w-md"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-white">Verify Your Email</h2>
                    <p className="text-center text-gray-300 mb-6">Enter the 6-digit code sent to your email address.</p>
                    <p className="text-center text-gray-300 mb-6">This code is only valid for 1 hours</p>
                
                    <div className="space-y-6">
                        <div className="flex justify-between">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)} // Assign ref directly with typing
                                    type="text"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-12 text-center text-2xl font-bold bg-transparent border-2 border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none"
                                />
                            ))}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleVerifyClick}
                            disabled={false || code.some((digit) => !digit)}
                            className="w-full bg-[#e1e3e2] text-black font-bold py-3 px-4 rounded-full mt-8 shadow-lg hover:bg-[#c2c2c2] focus:outline-none focus:ring-2 focus:ring-[#7ea9cf] focus:ring-opacity-50 disabled:opacity-50"
                        >
                            {isPending ? "Verifying..." : "Verify Email"}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


export default EmailVerificationPage;
