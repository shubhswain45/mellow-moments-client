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
    IconButton
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useSignup } from '@/hooks/auth';

const Signup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const { mutate: signup, isPending } = useSignup();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        signup(formData);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent bg="#161617" color="white">
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="auto" maxHeight="60vh">
                    <form onSubmit={handleSignup}>
                        <Stack spacing={4} p={7}>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <Input 
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    bg="#2a2a29"
                                    color="white"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="fullname">Full Name</FormLabel>
                                <Input 
                                    id="fullname"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    bg="#2a2a29"
                                    color="white"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    bg="#2a2a29"
                                    color="white"
                                    value={formData.email}
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
                        </Stack>
                    </form>
                </ModalBody>
                <ModalFooter bg="#111827">
                    <Button
                        bg="#e1e3e2"
                        textColor="black"
                        onClick={handleSignup}
                        w="100%"
                        borderRadius="full"
                        _hover={{ bg: "#c2c2c2" }}
                        isLoading={isPending}
                        disabled={isPending}
                    >
                        Sign Up
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Signup;
