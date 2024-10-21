import { Avatar, Box, Tooltip } from "@chakra-ui/react";


const ProfileLink = () => {
	// const authUser = useAuthStore((state) => state.user);

	return (
		<Tooltip
			hasArrow
			label={"Profile"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Box
				display={"flex"}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
				ml={{ base: "5px", md: "3px" }}
			>
				<Avatar size={"sm"} src={""} />
				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Box>
		</Tooltip>
	);
};

export default ProfileLink;