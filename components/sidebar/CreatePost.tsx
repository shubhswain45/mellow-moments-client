import { useCreatePost } from "@/hooks/post";
import usePreviewImg from "@/hooks/usePrevImage";
import { Box, Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsFillImageFill, BsPlusSquare } from "react-icons/bs";

const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const { mutate: createPost, isPending } = useCreatePost();

    // State for the post content (caption)
    const [content, setContent] = useState<string>("");

    // Specify the type for imageRef
    const imageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
            // Call createPost with caption and image
            createPost({ content, imageURL: selectedFile || "" });
            // Reset the states after submission
            setContent("");
            setSelectedFile(null);
            // onClose();
       
    };

    return (
        <>
            <Tooltip
                hasArrow
                label="Create"
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    onClick={onOpen}
                    alignItems="center"
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }} // Change background on hover
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }} // Responsive width
                    justifyContent={{ base: "center", md: "flex-start" }} // Centered on small screens
                    ml={{ base: "5px", md: "9px" }} // Responsive margin
                >
                    <BsPlusSquare size={18} />
                    <Box display={{ base: "none", md: "block" }}>Create</Box>
                </Flex>
            </Tooltip>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent bg={"#161617"} border={"1px solid gray"}>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Textarea
                            placeholder='Post caption...'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />

                        <Input type='file' hidden ref={imageRef} onChange={handleImageChange} />

                        <BsFillImageFill
                            onClick={() => imageRef.current?.click()} // TypeScript should now recognize this correctly
                            style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
                            size={16}
                        />
                        {selectedFile && (
                            <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"}>
                                <Image src={selectedFile} alt='Selected img' />
                                <CloseButton
                                    position={"absolute"}
                                    top={2}
                                    right={2}
                                    onClick={() => {
                                        setSelectedFile(null);
                                    }}
                                />
                            </Flex>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={handleSubmit} isLoading={isPending}>
                            Post
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreatePost;
