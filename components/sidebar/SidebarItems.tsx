import CreatePost from "./CreatePost";
import Home from "./Home";
import Messages from "./Messsages";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI

const SidebarItems = () => {
	return (
		<>
			<Box> 
				<Home />
			</Box>
			<Box mt={-2}>
				<Search />
			</Box>
			<Box mt={-2}>
				<Notifications />
			</Box>
			<Box mt={-2}>
				<Messages/>
			</Box>
			<Box mt={-2}>
				<CreatePost />
			</Box>
			<Box mt={-2}>
				<ProfileLink />
			</Box>
		</>
	);
};

export default SidebarItems;
