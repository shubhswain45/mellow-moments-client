"use client";
import React, { useState } from 'react';
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
    InputGroup,
    InputRightElement,
    IconButton,
    Text
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import { useLogin, useLoginWithGoogle } from '@/hooks/auth';

const Login = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const { mutate: login, isPending } = useLogin();
    const { mutate: loginWithGoogle } = useLoginWithGoogle()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        login(formData);
    };

    const handleLoginSuccess = (cred: CredentialResponse) => {
        loginWithGoogle(cred.credential || "")
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent bg="#161617" color="white">
                <ModalHeader>Sign in to Mellow-moments</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="auto" maxHeight="60vh">
                    <form onSubmit={handleLogin}>
                        <Stack spacing={4} p={7} align="center">
                            <GoogleLogin onSuccess={handleLoginSuccess} />

                            <Text textAlign="center" marginY="4" color="gray.500">
                                -------------------- or --------------------
                            </Text>

                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="emailOrUsername">Email or Username</FormLabel>
                                <Input
                                    id="emailOrUsername"
                                    name="emailOrUsername"
                                    placeholder="Email or Username"
                                    bg="#2a2a29"
                                    color="white"
                                    value={formData.emailOrUsername}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        bg="#2a2a29"
                                        color="white"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <InputRightElement>
                                        <IconButton
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                            onClick={() => setShowPassword(!showPassword)}
                                            bg="transparent"
                                            _hover={{ bg: "transparent" }}
                                            size="sm"
                                        />
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>

                            <Link href="/forgot-password">
                                <Button
                                    bg="transparent"
                                    _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                                    width="300px"
                                    borderRadius="full"
                                    border="1px solid white"
                                    textColor="white"
                                >
                                    Forgot password
                                </Button>
                            </Link>
                        </Stack>
                    </form>
                </ModalBody>
                <ModalFooter bg="#111827">
                    <Button
                        bg="#e1e3e2"
                        textColor="black"
                        onClick={handleLogin}
                        w="100%"
                        borderRadius="full"
                        _hover={{ bg: "#c2c2c2" }}
                        isLoading={isPending}
                        disabled={isPending}
                    >
                        Login
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Login;
