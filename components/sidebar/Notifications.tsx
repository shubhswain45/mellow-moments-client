import { Box, Flex, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
// import { IoIosNotifications } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";


const Notifications = () => {
    return (
        <Tooltip
            hasArrow
            label={"Notifications"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
        >
            <Link
                href={"/notifications"}
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
                    ml={{ base: "4px", md: "6px" }}
                >
                    <RiNotification2Line size={21} />
                    <Box display={{ base: "none", md: "block" }}>Notifications</Box>
                    
                </Flex>
            </Link>
        </Tooltip>
    );
};

export default Notifications;