/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "#graphql\n    mutation LoginWithGoogle($token: String!) {\n        loginWithGoogle(token: $token) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }    \n": types.LoginWithGoogleDocument,
    "#graphql\n    mutation Signup($input: SignupUserInput!) {\n        signup(input: $input) {\n            email\n        }\n    }\n": types.SignupDocument,
    "#graphql\n    mutation Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.LoginDocument,
    "#graphql\n    mutation Logout {\n        logout\n    }\n": types.LogoutDocument,
    "#graphql\n    mutation VerifyEmail($input: VerifyEmailInput!) {\n        verifyEmail(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.VerifyEmailDocument,
    "#graphql\n    mutation ForgotPassword($input: ForgotPasswordInput!) {\n        forgotPassword(input: $input)\n    }\n": types.ForgotPasswordDocument,
    "#graphql\n    mutation ResetPassword($input: ResetPasswordInput!){       \n        resetPassword(input: $input)\n    }\n": types.ResetPasswordDocument,
    "#graphql\n    query GetAuthUser {\n        getAuthUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.GetAuthUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation LoginWithGoogle($token: String!) {\n        loginWithGoogle(token: $token) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }    \n"): (typeof documents)["#graphql\n    mutation LoginWithGoogle($token: String!) {\n        loginWithGoogle(token: $token) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation Signup($input: SignupUserInput!) {\n        signup(input: $input) {\n            email\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation Signup($input: SignupUserInput!) {\n        signup(input: $input) {\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation Login($input: LoginUserInput!) {\n        login(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation Logout {\n        logout\n    }\n"): (typeof documents)["#graphql\n    mutation Logout {\n        logout\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation VerifyEmail($input: VerifyEmailInput!) {\n        verifyEmail(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation VerifyEmail($input: VerifyEmailInput!) {\n        verifyEmail(input: $input) {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation ForgotPassword($input: ForgotPasswordInput!) {\n        forgotPassword(input: $input)\n    }\n"): (typeof documents)["#graphql\n    mutation ForgotPassword($input: ForgotPasswordInput!) {\n        forgotPassword(input: $input)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation ResetPassword($input: ResetPasswordInput!){       \n        resetPassword(input: $input)\n    }\n"): (typeof documents)["#graphql\n    mutation ResetPassword($input: ResetPasswordInput!){       \n        resetPassword(input: $input)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetAuthUser {\n        getAuthUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetAuthUser {\n        getAuthUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;