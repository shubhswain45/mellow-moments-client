"use client"
import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text
} from '@chakra-ui/react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

const Login = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle signup logic here
    };

    const handleLoginSuccess = (cred: CredentialResponse) => {
        console.log(cred);
        // Handle the success response here (e.g., redirecting or updating state)
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent bg="#1c1c1b" color="white">
                <ModalHeader>Sign in to Mellow-moments</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="auto" maxHeight="60vh"> {/* Add scrollbar */}
                    <form onSubmit={handleLogin}>
                        <Stack spacing={4} p={7}>
                            <GoogleLogin onSuccess={handleLoginSuccess} />

                            <Text textAlign="center" marginY="4" color="gray.500">
                                -------------------- or --------------------
                            </Text>

                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input id="username" placeholder="Enter your username" bg="#2a2a29" color="white" />
                            </FormControl>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input type="password" id="password" placeholder="Enter your password" bg="#2a2a29" color="white" />
                            </FormControl>
                            {/* Add more fields as needed */}
                        </Stack>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        bg={"#e1e3e2"}
                        textColor={"black"}
                        onClick={handleLogin}
                        w="100%"
                        borderRadius="full" // Makes the button fully rounded
                        _hover={{ bg: "#c2c2c2" }}
                    >
                        Login
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Login;
