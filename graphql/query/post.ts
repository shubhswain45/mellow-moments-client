import { graphql } from "@/gql";

export const GetUserPostsQuery = graphql(`#graphql
    query GetUserPosts($input: GetUserPostsInput!) {
        getUserPosts(input: $input) {
            id
            content
            imgURL  
        }
    }
`)