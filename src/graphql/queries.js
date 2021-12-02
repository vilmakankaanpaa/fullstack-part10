import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories(
    $first: Int,
    $after: String,
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ){
    repositories (
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      totalCount
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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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

export const GET_REVIEWS = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(
      id: $id
    ) {
      id
      fullName
      reviews(
        first: $first,
        after: $after
      ) {
        totalCount
        edges {
          node {
            id
            fullName
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repository {
              fullName
              id
            }
            rating
            createdAt
            text
            user {
              username
            }
          }
        }
      }
    }
  }
`;
