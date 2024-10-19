import { graphql } from "@/gql";

export const createPostMutation = graphql(`#graphql
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
        }
    }
`)