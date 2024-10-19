import { graphql } from "@/gql";

export const loginWithGoogleMutation = graphql(`#graphql
    mutation LoginWithGoogle($token: String!) {
        loginWithGoogle(token: $token) {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }    
`)

export const signupMutation = graphql(`#graphql
    mutation Signup($input: SignupUserInput!) {
        signup(input: $input) {
            email
        }
    }
`);

export const loginMutation = graphql(`#graphql
    mutation Login($input: LoginUserInput!) {
        login(input: $input) {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }
`)


export const logoutMutation = graphql(`#graphql
    mutation Logout {
        logout
    }
`)

export const verifyEmailMutation = graphql(`#graphql
    mutation VerifyEmail($input: VerifyEmailInput!) {
        verifyEmail(input: $input) {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }
`)

export const forgotPasswordMutation = graphql(`#graphql
    mutation ForgotPassword($input: ForgotPasswordInput!) {
        forgotPassword(input: $input)
    }
`)


export const resetPasswordMutation = graphql(`#graphql
    mutation ResetPassword($input: ResetPasswordInput!){       
        resetPassword(input: $input)
    }
`)

export const resendVerificationTokenMutation = graphql(`#graphql
    mutation ResendVerificationToken($email: String!) {
        resendVerificationToken(email: $email)
    }
`)