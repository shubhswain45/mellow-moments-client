"use client"
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfilePosts from "@/components/profile/ProfilePosts";
import ProfileTabs from "@/components/profile/ProfileTabs";
import PageLayout from "@/pageLayout/PageLayout";
import { Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";

const ProfilePage = () => {
    // Hardcoded data
    const isLoading = false;
    const userProfile = {
        id: 1,
        username: "johndoe",
        fullName: "John Doe",
        profilePicture: "https://example.com/johndoe.jpg",
        bio: "Web developer and tech enthusiast",
        followers: 100,
        following: 150,
    };

    const userNotFound = !isLoading && !userProfile;
    if (userNotFound) return <UserNotFound />;

    return (
        <PageLayout>
            <Container maxW='container.lg' py={5}>
                <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
                    {!isLoading && userProfile && <ProfileHeader />}
                    {isLoading && <ProfileHeaderSkeleton />}
                </Flex>
                <Flex
                    px={{ base: 2, sm: 4 }}
                    maxW={"full"}
                    mx={"auto"}
                    borderTop={"1px solid"}
                    borderColor={"whiteAlpha.300"}
                    direction={"column"}
                >
                    <ProfileTabs />
                    <ProfilePosts />
                </Flex>
            </Container>
        </PageLayout>
    );
};

export default ProfilePage;

// Skeleton for profile header
const ProfileHeaderSkeleton = () => {
    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: "column", sm: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <SkeletonCircle size='24' />

            <VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
                <Skeleton height='12px' width='150px' />
                <Skeleton height='12px' width='100px' />
            </VStack>
        </Flex>
    );
};

// Hardcoded UserNotFound component
const UserNotFound = () => {
    return (
        <Flex flexDir='column' textAlign={"center"} mx={"auto"}>
            <Text fontSize={"2xl"}>User Not Found</Text>
            {/* <Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
				Go home
			</Link> */}
        </Flex>
    );
};
