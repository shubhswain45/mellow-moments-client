"use client";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import { useLoginWithGoogle } from "@/hooks/auth";
import { Box, Flex, Stack, Button, Text, useDisclosure } from "@chakra-ui/react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function Home() {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  
  const { mutate: loginWithGoogle } = useLoginWithGoogle();

  const handleLoginSuccess = (cred: CredentialResponse) => {
    console.log(cred);
    loginWithGoogle(cred.credential || "");
  };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" padding="4">
      <Flex
        maxWidth="800px"
        width="100%"
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
        direction={{ base: "column", md: "row" }}
      >
        {/* Left Hand Side - Logo */}
        <Box flex="1" display="flex" alignItems="center" justifyContent="center" padding="8">
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, gray.200, gray.600)"
            bgClip="text"
            fontFamily="'Dancing Script', cursive"
          >
            Mellow Moments
          </Text>
        </Box>

        {/* Right Hand Side - Buttons */}
        <Box flex="2" padding="8" display="flex" alignItems="center" justifyContent="center">
          <Box width="100%" maxWidth="400px">
            <Stack spacing="4" align="center">
              {/* Google Login Button */}
              <Flex justifyContent="center" width="100%">
                <Box width="100%" maxWidth="400px">
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    size="large"
                    shape="pill"
                    logo_alignment="center"
                  />
                </Box>
              </Flex>

              <Text textAlign="center" marginY="4" color="gray.500">
                -------------------- or --------------------
              </Text>

              <Button
                bg="#3d84d4"
                _hover={{ bg: "#2d588a" }}
                width="100%"
                borderRadius="full"
                textColor="white"
                onClick={onSignupOpen}
              >
                Create Account
              </Button>

              <Text fontSize="xs" textAlign="center">
                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
              </Text>

              <Text marginY="4" color="white" fontWeight="bold">
                Already have an account?
              </Text>

              <Button
                bg="transparent"
                _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                width="100%"
                borderRadius="full"
                border="1px solid white"
                textColor="#2b4f78"
                onClick={onLoginOpen}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Box>
      </Flex>

      {/* Signup Modal Component */}
      <Signup isOpen={isSignupOpen} onClose={onSignupClose} />
      {/* Login Modal Component */}
      <Login isOpen={isLoginOpen} onClose={onLoginClose} />
    </Flex>
  );
}
