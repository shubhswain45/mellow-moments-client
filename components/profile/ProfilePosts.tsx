import { Box, Flex, Grid, GridItem, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "@/clients/api";
import { GetUserPostsQuery } from "@/graphql/query/post";
// import { useRouter } from "next/router";

const ProfilePosts = () => {

    // const router = useRouter();
    // const { username } = router.query;

    const input = { limit: 5, offset: 0, username: "shubh" }
    // Fetch posts using useQuery
    const { data, isLoading } = useQuery({
        queryKey: ["userPosts"],
        queryFn: async () => {
            const { getUserPosts } = await graphQLClient.request(GetUserPostsQuery, { input });
            return getUserPosts; // Use the correct field from the GraphQL response
        },
    });

    const posts = data || []; // Use the data from the query, or fallback to an empty array

    const noPostsFound = !isLoading && posts.length === 0;
    if (noPostsFound) return <NoPostsFound />;

    console.log("posts", data);
    
    return (
        <Grid
            templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
            }}
            gap={1}
            columnGap={1}
        >
            {isLoading &&
                [0, 1, 2].map((_, idx) => (
                    <GridItem
                        key={idx}
                        cursor={"pointer"}
                        borderRadius={4}
                        overflow={"hidden"}
                        border={"1px solid"}
                        borderColor={"whiteAlpha.300"}
                        position={"relative"}
                        aspectRatio={1 / 1}
                    >
                        <Flex
                            _hover={{ opacity: 1 }}
                            position={"absolute"}
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bg={"blackAlpha.700"}
                            transition={"all 0.3s ease"}
                            zIndex={1}
                            justifyContent={"center"}
                        >
                            <Flex alignItems={"center"} justifyContent={"center"} gap={50} objectFit={"cover"}>
                                <Skeleton w={"100%"} h={"100%"}>
                                    <Box h="1000px" w="1000px">contents wrapped</Box>
                                </Skeleton>
                            </Flex>
                        </Flex>
                    </GridItem>
                ))}

            {!isLoading && posts.map((post) => (
                <ProfilePost key={post?.id} post={post}/> // Pass post data to the ProfilePost component
            ))}
        </Grid>
    );
};

export default ProfilePosts;

const NoPostsFound = () => {
    return (
        <Flex flexDir="column" textAlign={"center"} mx={"auto"} mt={10}>
            <Text fontSize={"2xl"}>No Posts Found 🤔</Text>
        </Flex>
    );
};
