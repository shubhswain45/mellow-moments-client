import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const SuggestedUser = () => {
  // Hardcoded user data
  const user = {
    uid: "1",
    username: "john_doe",
    fullName: "John Doe",
    profilePicURL: "https://via.placeholder.com/150",
    followers: [
      { uid: "2" }, // Simulating followers
      { uid: "3" },
    ],
  };

  const authUser = {
    uid: "4", // Simulating the authenticated user
  };

  const isFollowing = false; // Simulating following state
  const isUpdating = false; // Simulating loading state

  const onFollowUser = async () => {
    // Simulating follow/unfollow functionality
    console.log(`${isFollowing ? 'Unfollow' : 'Follow'} ${user.username}`);
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        {/* <Link to={`/${user.username}`}> */}
          <Avatar src={user.profilePicURL} size={"md"} />
        {/* </Link> */}
        <VStack spacing={2} alignItems={"flex-start"}>
          {/* <Link to={`/${user.username}`}> */}
            <Box fontSize={12} fontWeight={"bold"}>
              {user.fullName}
            </Box>
          {/* </Link> */}
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={onFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
