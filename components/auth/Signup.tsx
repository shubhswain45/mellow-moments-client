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
    Text,
} from '@chakra-ui/react';

const Signup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) => {
    const [step, setStep] = useState(1); // Step to manage the form view
    const [verificationCode, setVerificationCode] = useState(''); // State for the verification code

    const handleSignup = (event: React.FormEvent) => {
        event.preventDefault();
        
        if (step === 1) {
            // Handle signup logic here, e.g., send data to the server
            setStep(2); // Move to the next step (Verify Email)
        } else {
            // Handle verification logic here, e.g., verify the code
            console.log("Verification Code:", verificationCode);
            // If verification is successful, proceed (you can call an API or perform any logic here)
            onClose(); // Close modal after successful verification
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="md" closeOnOverlayClick={false}> {/* Disable closing on overlay click */}
            <ModalOverlay />
            <ModalContent bg="#1c1c1b" color="white">
                <ModalHeader>{step === 1 ? "Create your account" : "Verify your email"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflowY="auto" maxHeight="60vh"> {/* Add scrollbar */}
                    {step === 1 ? (
                        <form onSubmit={handleSignup}>
                            <Stack spacing={4} p={7}>
                                <FormControl mb={4} isRequired>
                                    <FormLabel htmlFor="username">Username</FormLabel>
                                    <Input id="username" placeholder="Enter your username" bg="#2a2a29" color="white" />
                                </FormControl>
                                <FormControl mb={4} isRequired>
                                    <FormLabel htmlFor="fullname">Full Name</FormLabel>
                                    <Input id="fullname" placeholder="Enter your full name" bg="#2a2a29" color="white" />
                                </FormControl>
                                <FormControl mb={4} isRequired>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input type="email" id="email" placeholder="Enter your email" bg="#2a2a29" color="white" />
                                </FormControl>
                                <FormControl mb={4} isRequired>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input type="password" id="password" placeholder="Enter your password" bg="#2a2a29" color="white" />
                                </FormControl>
                                {/* Add more fields as needed */}
                            </Stack>
                        </form>
                    ) : (
                        <Stack spacing={4} p={7}>
                            <Text fontSize="lg" textAlign="center">
                                A verification email has been sent to your email address. Please enter the verification code below:
                            </Text>
                            <FormControl mb={4} isRequired>
                                <FormLabel htmlFor="verificationCode">Verification Code</FormLabel>
                                <Input 
                                    id="verificationCode" 
                                    placeholder="Enter verification code" 
                                    bg="#2a2a29" 
                                    color="white"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)} // Update verification code state
                                />
                            </FormControl>
                        </Stack>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button
                        bg={"#e1e3e2"}
                        textColor={"black"}
                        onClick={handleSignup} // On click, handle signup or verification logic
                        w="100%"
                        borderRadius="full" // Makes the button fully rounded
                        _hover={{ bg: "#c2c2c2" }}
                    >
                        {step === 1 ? "Next" : "Verify"} {/* Change button text based on step */}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Signup;
