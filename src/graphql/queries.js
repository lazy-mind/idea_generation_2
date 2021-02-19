/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($id: ID!) {
    getUserInfo(id: $id) {
      id
      name
      success_code
      invitation_code
      node_index
      node_parent
      node_value
      node_time
      click_index
      click_type
      click_time
      createdAt
      updatedAt
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos(
    $filter: ModelUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        success_code
        invitation_code
        node_index
        node_parent
        node_value
        node_time
        click_index
        click_type
        click_time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeedword = /* GraphQL */ `
  query GetSeedword($id: ID!) {
    getSeedword(id: $id) {
      id
      seed
      time_allowed
      createdAt
      updatedAt
    }
  }
`;
export const listSeedwords = /* GraphQL */ `
  query ListSeedwords(
    $filter: ModelSeedwordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeedwords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        seed
        time_allowed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWordLimit = /* GraphQL */ `
  query GetWordLimit($id: ID!) {
    getWordLimit(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listWordLimits = /* GraphQL */ `
  query ListWordLimits(
    $filter: ModelWordLimitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWordLimits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
