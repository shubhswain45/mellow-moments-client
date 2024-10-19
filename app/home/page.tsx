"use client"
import FeedPosts from '@/components/home/feedpost/FeedPosts';
import SuggestedUsers from '@/components/home/suggesteduser/SuggestedUsers';
import { useGetAuthUser } from '@/hooks/auth';
import PageLayout from '@/pageLayout/PageLayout';
import { Box, Container, Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function HomePage() {
  const router = useRouter()
  const { data, isLoading } = useGetAuthUser();

  useEffect(() => {
    if (!isLoading && (!data?.getAuthUser || !data?.getAuthUser?.isVerified)) {
      router.replace("/");
    }
  }, [data, router, isLoading]);

  // Show a spinner while loading user data or while redirecting
  if (isLoading || (!data?.getAuthUser || !data?.getAuthUser?.isVerified)) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }
  return (
    <PageLayout>
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box flex={2} py={10}>
            <FeedPosts />
          </Box>
          <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
            <SuggestedUsers />
          </Box>
        </Flex>
      </Container>
    </PageLayout>
  );
}

export default HomePage