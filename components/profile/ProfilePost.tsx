import {
    Avatar,
    Button,
    Divider,
    Flex,
    GridItem,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure,
    Box
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";



const ProfilePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [setIsDeleting] = useState(false);

    const dummyComments = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        text: `This is comment number ${index + 1}`,
    }));

    // const handleDeletePost = async () => {
    //     if (!window.confirm("Are you sure you want to delete this post?")) return;
    //     // setIsDeleting(true);
    //     // setTimeout(() => {
    //     //     setIsDeleting(false);
    //     //     alert("Post deleted");
    //     // }, 1000);
    // };

    return (
        <>
            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                position={"relative"}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={"whiteAlpha.400"}
                    transition={"all 0.3s ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >
                    <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                50
                            </Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                50
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image src={""} objectFit={"cover"} h={"100%"} w={"100%"} />
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "3xl", md: "5xl" }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={"#161617"} pb={5}>
                        <Flex 
                            gap={4} 
                            w={{ base: "90%", sm: "70%", md: "full" }} 
                            mx={"auto"} 
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            <Box
                                borderRadius={4}
                                overflow={"hidden"}
                                border={"1px solid"}
                                borderColor={"whiteAlpha.300"}
                                flex={1.5}
                                mt={3}
								justifyContent={"center"}
								alignContent={"center"}
								mx={"auto"}
                            >
                                <Image 
                                    src={""}  
                                    maxH={"600px"} 
                                    maxW={"100%"} 
                                    mx={'auto'} 
                                    objectFit={"contain"} 
                                />
                            </Box>
                            <Flex 
                                flex={1} 
                                flexDir={"column"} 
                                px={10} 
                                display={{ base: "flex", md: "flex" }} 
                                mt={{ base: 4, md: 0 }} 
                            >
                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                    <Flex>
                                        <Avatar src={""} size={"sm"} name='As a Programmer' />
                                        <Text fontWeight={"bold"} fontSize={12} mt={1} ml={3}>
                                            "user"
                                        </Text>
                                    </Flex>
                                    <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1}>
                                        {true && (
                                            <Button
                                                size={"sm"}
                                                bg={"transparent"}
                                                _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                                                borderRadius={4}
                                                p={1}
                                            >
                                                <MdDelete size={20} cursor='pointer' />
                                            </Button>
                                        )}
                                    </Box>
                                </Flex>
                                <Divider my={4} bg={"gray.500"} />
                                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                                    {/* Display dummy comments */}
                                    {dummyComments.map(comment => (
                                        <Box key={comment.id} p={2} bg={"whiteAlpha.100"} borderRadius={4} w="full">
                                            <Text fontSize={14} color="white">
                                                {comment.text}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfilePost;
