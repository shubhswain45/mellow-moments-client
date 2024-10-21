import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const PostHeader = () => {
  // Hardcoded data
  // const post = {
  //   id: "post1",
  //   createdBy: "user123",
  //   createdAt: new Date("2023-10-01T12:00:00Z"), // Hardcoded creation date
  // };

  const creatorProfile = {
    username: "john_doe",
    profilePicURL: "https://via.placeholder.com/150", // Hardcoded profile picture URL
  };

  // Hardcoded follow state
  const isFollowing = false;
  const isUpdating = false;

  // Dummy function for handling follow/unfollow action
  const handleFollowUser = () => {
    console.log("Follow/Unfollow action triggered");
  };

  // Dummy timeAgo function
  // const timeAgo = (date:any) => {
  //   const now = new Date();
  //   const diffInMs = now.getTime() - new Date(date).getTime();
  //   const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  //   return `${diffInHours} hours ago`; // Simplified hardcoded time ago function
  // };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
        //   <Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL}  size={"sm"} />
        //   </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap="2">
          {creatorProfile ? (
            <div>
            {creatorProfile.username}
            </div>
          ) : (
            <Skeleton w={"100px"} h={"10px"} />
          )}

          <Box color={"gray.500"}>• 1d ago</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
