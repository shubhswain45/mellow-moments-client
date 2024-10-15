"use client";
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export default function Home() {
  const handleLoginSuccess = (cred: CredentialResponse) => {
    console.log(cred);
    // Handle the success response here (e.g., redirecting or updating state)
  };

  const handleLoginFailure = (error: any) => {
    console.error(error);
    // Handle login failure (e.g., show an error message)
  };

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      padding="4"
    >
      <Flex
        maxWidth="800px"
        width="100%"
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
        direction={{ base: "column", md: "row" }}
      >
        {/* Left Hand Side - Logo */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="8"
        >
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, gray.200, gray.600)" // Gray gradient
            bgClip="text"
            fontFamily="'Dancing Script', cursive" // Example cursive font
          >
            Mellow Moment
          </Text>
        </Box>

        {/* Right Hand Side - Buttons */}
        <Box flex="2" padding="8" display="flex" alignItems="center" justifyContent="center">
          <Box width="100%" maxWidth="400px">
            <Stack spacing="4">
              {/* Google Login Button */}
              <GoogleLogin
                onSuccess={handleLoginSuccess}
              />

              <Text textAlign="center" marginY="4" color="gray.500">
                -------------------- or --------------------
              </Text>

              <Button
                bg="#3d84d4"
                _hover={{ bg: "#2d588a" }}
                width="100%"
                borderRadius="full"
                textColor={"white"}
              >
                Create Account
              </Button>
              <Text fontSize={"xs"}>
                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
              </Text>

              <Text marginY="4" color="white" fontWeight={"bold"}>
                Already have an account?
              </Text>
              <Button
                width="100%"
                borderRadius="full"
                border={"1px solid white"}
                textColor={"#2b4f78"}
                mt={-5}
              >
                Sign In
              </Button>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
