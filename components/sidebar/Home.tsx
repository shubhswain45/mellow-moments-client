import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
// import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { GoHome } from "react-icons/go";
// import { Link as RouterLink } from "react-router-dom";


const Home = () => {
    return (
        <Tooltip
            hasArrow
            label={"Home"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Link
                href={"/home"}
            >
                <Flex
                    display={"flex"}
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    ml={1}
                >
                    <GoHome size={24} />
                    <Box display={{ base: "none", md: "block" }}>Home</Box>
                </Flex>
            </Link>
        </Tooltip>
    );
};

export default Home;