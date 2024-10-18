import { graphql } from "@/gql";

export const getAuthUserQuery = graphql(`#graphql
    query GetAuthUser {
        getAuthUser {
            id
            profileImageURL
            email
            username
            fullName
            isVerified
        }
    }
` )