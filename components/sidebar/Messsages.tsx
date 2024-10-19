import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


const Messages = () => {
    return (
        <Tooltip
            hasArrow
            label={"Messages"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Link
                href={"/messages"}
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
                    ml={{ base: "5px", md: "6px" }}

                >
                    <IoChatbubbleEllipsesOutline size={20} />
                    <Box display={{ base: "none", md: "block" }}>Messages</Box>
                    
                </Flex>
            </Link>
        </Tooltip>
    );
};

export default Messages;