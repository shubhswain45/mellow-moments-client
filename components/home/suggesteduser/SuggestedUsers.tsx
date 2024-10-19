import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  // Hardcoded data
  const suggestedUsers = [
    {
      id: "1",
      username: "john_doe",
      profilePicURL: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      username: "jane_smith",
      profilePicURL: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      username: "mike_ross",
      profilePicURL: "https://via.placeholder.com/150",
    },
  ];

  const isLoading = false; // No loading state as data is hardcoded

  // No need for loading skeleton as data is hardcoded
  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
            See All
          </Text>
        </Flex>
      )}

      {/* Hardcoded suggested users */}
      {suggestedUsers.map((user) => (
        <SuggestedUser/>
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link href="https://www.youtube.com/@asaprogrammer_" target="_blank" color="blue.500" fontSize={14}>
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
