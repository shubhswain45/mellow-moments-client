"use client"
import { useGetAuthUser } from '@/hooks/auth';
import { Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function HomePage() {
  const router = useRouter()
  const { data, isLoading } = useGetAuthUser(); 

  useEffect(() => {
    if (!data?.getAuthUser && !isLoading && !data?.getAuthUser?.isVerified) {
      router.replace("/"); 
    }
  }, [data, router, isLoading]);

  // Show a spinner while loading user data or while redirecting
  if (isLoading || (!data?.getAuthUser && !data?.getAuthUser?.isVerified)) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }
  return (
    <div>HomePage</div>
  )
}

export default HomePage