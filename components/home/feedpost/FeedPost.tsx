import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = () => {
	// const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			<PostHeader />
			<Box my={2} borderRadius={4} overflow={"hidden"}>
				<Image src={""} alt={"FEED POST IMG"} />
			</Box>
			<PostFooter />
		</>
	);
};

export default FeedPost;