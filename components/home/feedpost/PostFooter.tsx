import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  
  const PostFooter = () => {
    // Hardcoded data
    const post = {
      id: "post1",
      createdAt: new Date("2023-10-01T12:00:00Z"),
      caption: "This is a hardcoded caption for the post",
      likes: 15,
      comments: [
        { id: "comment1", text: "Great post!", username: "user123" },
        { id: "comment2", text: "Loved it!", username: "user456" },
      ],
    };
  
    const creatorProfile = {
      username: "creator123",
      displayName: "John Doe",
    };
  
    const isProfilePage = false;
  
    // Local states
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState("");
    const commentRef = useRef<HTMLInputElement>(null);
    const { onOpen } = useDisclosure();
  
    // Event handlers
    const handleLikePost = () => {
      setIsLiked(!isLiked);
    };
  
    const handleSubmitComment = () => {
      console.log("Submitting comment:", comment);
      setComment("");
    };
  
    return (
      <Box mb={10} marginTop={"auto"}>
        {/* Like and Comment icons */}
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
          <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
            {!isLiked ? "👍 Like" : "👎 Unlike"}
          </Box>
  
          <Box
            cursor={"pointer"}
            fontSize={18}
            onClick={() => commentRef.current?.focus()} // Optional chaining to avoid null errors
          >
            💬 Comment
          </Box>
        </Flex>
  
        {/* Likes count */}
        <Text fontWeight={600} fontSize={"sm"}>
          {post.likes} likes
        </Text>
  
        {/* Profile Page specific details */}
        {isProfilePage && (
          <Text fontSize="12" color={"gray"}>
            Posted {new Date(post.createdAt).toDateString()}
          </Text>
        )}
  
        {/* Home Page specific details */}
        {!isProfilePage && (
          <>
            <Text fontSize="sm" fontWeight={700}>
              {creatorProfile.username}{" "}
              <Text as="span" fontWeight={400}>
                {post.caption}
              </Text>
            </Text>
            {post.comments.length > 0 && (
              <Text
                fontSize="sm"
                color={"gray"}
                cursor={"pointer"}
                onClick={onOpen}
              >
                View all {post.comments.length} comments
              </Text>
            )}
          </>
        )}
  
        {/* Comment Input */}
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    );
  };
  
  export default PostFooter;
  