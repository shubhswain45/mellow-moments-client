import { ReactNode } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Box, Flex, Spinner } from "@chakra-ui/react";

// Define the props type for PageLayout
interface PageLayoutProps {
  children: ReactNode;
}

// PageLayout component
const PageLayout = ({ children }: PageLayoutProps) => {
  const canRenderSidebar = true; // This can be modified based on your conditions

  return (
    <Flex flexDir={false ? "column" : "row"}>
      {/* Sidebar on the left */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* The page content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

// PageLayoutSpinner component
const PageLayoutSpinner = () => {
  return (
    <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
      <Spinner size='xl' />
    </Flex>
  );
};

export { PageLayoutSpinner };
