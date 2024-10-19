import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  // Hardcoded user data
  const authUser = {
    username: "john_doe",
    profilePicURL: "https://via.placeholder.com/150",
  };

  const handleLogout = () => {
    // Simulating logout functionality
    console.log("User logged out");
  };

  // Return null if authUser is not available
  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        {/* <Link to={`/${authUser.username}`}> */}
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        {/* </Link> */}
        {/* <Link to={`/${authUser.username}`}> */}
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        {/* </Link> */}
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
