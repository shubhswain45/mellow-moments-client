"use client";

import { useEffect, useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";

interface LogoProviderProps {
    children: React.ReactNode;
}

// Define the keyframes for zoom-in and zoom-out animation using @emotion/react
const zoomAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function LogoProvider({ children }: LogoProviderProps) {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 1000); // Show logo for 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return showSplash ? <SplashScreen /> : <>{children}</>;
}

function SplashScreen() {
    return (
        <Flex minH="100vh" justify="center" align="center">
            <Box
                animation={`${zoomAnimation} 1.5s ease-in-out infinite`}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text
                    fontSize="5rem"
                    fontWeight="bold"
                    bgGradient="linear(to-r, gray.200, gray.600)"
                    bgClip="text"
                    fontFamily="'Dancing Script', cursive"
                >
                    M
                </Text>
            </Box>
        </Flex>
    );
}
