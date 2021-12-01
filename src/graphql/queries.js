import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          ownerAvatarUrl
          language
          reviewCount
          stargazersCount
          forksCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository (
      id: $id
    ) {
      id
      fullName
      url
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;