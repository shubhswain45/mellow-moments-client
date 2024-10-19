import { Box, Button, Flex, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import SidebarItems from "./SidebarItems";
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {
	// const { handleLogout, isLoggingOut } = useLogout();
	return (
		<Box
			height={"100vh"}
			borderRight={"1px solid"}
			borderColor={"whiteAlpha.300"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 2, md: 4 }}
		>
			<Flex direction={"column"} gap={10} w='full' height={"full"} mt={-10}>
				<Box pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
					<Text
						fontSize="4rem"
						fontWeight="bold"
						bgGradient="linear(to-r, gray.200, gray.600)"
						bgClip="text"
						fontFamily="'Dancing Script', cursive"
					>
						M
					</Text>
				</Box>
				<Box
					p={2}
					borderRadius={6}
					w={20}
					cursor='pointer'
					display={{ base: "block", md: "none" }}
					mt={15}
                    ml={"3px"}
				>
					<Text

						fontSize="2rem"
						fontWeight="bold"
						bgGradient="linear(to-r, gray.200, gray.600)"
						bgClip="text"
						fontFamily="'Dancing Script', cursive"
					>
						M
					</Text>
				</Box>
				<Flex direction={"column"} gap={5} cursor={"pointer"} mt={-9}>
					<SidebarItems />
				</Flex>

				{/* LOGOUT */}
				<Tooltip
					hasArrow
					label={"Logout"}
					placement='right'
					ml={1}
					openDelay={500}
					display={{ base: "block", md: "none" }}
				>
					<Flex
						// onClick={handleLogout}
						alignItems={"center"}
						gap={4}
						_hover={{ bg: "whiteAlpha.400" }}
						borderRadius={6}
						p={2}
						w={{ base: 10, md: "full" }}
						mt={"auto"}
						justifyContent={{ base: "center", md: "flex-start" }}
					>
						<BiLogOut size={25} />
						<Button
							display={{ base: "none", md: "block" }}
							variant={"ghost"}
							_hover={{ bg: "transparent" }}
						// isLoading={isLoggingOut}
						>
							Logout
						</Button>
					</Flex>
				</Tooltip>
			</Flex>
		</Box>
	);
};

export default Sidebar;