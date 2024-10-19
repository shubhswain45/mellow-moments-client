import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { BsPlusSquare } from "react-icons/bs";
import { FaPlus, FaRegPlusSquare } from "react-icons/fa";
// import { CreatePostLogo } from "../../assets/constants";

const CreatePost = () => {
    return (
        <>
            <Tooltip
                hasArrow
                label={"Create"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Link
                    href={"/create"}
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
                        ml={{ base: "5px", md: "8px" }}

                    >
                        <BsPlusSquare size={18} />
                        <Box display={{ base: "none", md: "block" }}>Create</Box>

                    </Flex>
                </Link>
            </Tooltip>
        </>
    );
};

export default CreatePost;
