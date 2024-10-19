import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    return (
        <>
            <Tooltip
                hasArrow
                label={"Explore"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Link
                    href={"/explore"}
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
                        <IoIosSearch size={25} />
                        <Box display={{ base: "none", md: "block" }}>Explore</Box>
                    </Flex>
                </Link>
            </Tooltip>
        </>
    );
};

export default Search;