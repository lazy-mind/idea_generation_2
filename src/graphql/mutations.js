/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
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
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
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
export const createSeedword = /* GraphQL */ `
  mutation CreateSeedword(
    $input: CreateSeedwordInput!
    $condition: ModelSeedwordConditionInput
  ) {
    createSeedword(input: $input, condition: $condition) {
      id
      seed
      time_allowed
      createdAt
      updatedAt
    }
  }
`;
export const updateSeedword = /* GraphQL */ `
  mutation UpdateSeedword(
    $input: UpdateSeedwordInput!
    $condition: ModelSeedwordConditionInput
  ) {
    updateSeedword(input: $input, condition: $condition) {
      id
      seed
      time_allowed
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeedword = /* GraphQL */ `
  mutation DeleteSeedword(
    $input: DeleteSeedwordInput!
    $condition: ModelSeedwordConditionInput
  ) {
    deleteSeedword(input: $input, condition: $condition) {
      id
      seed
      time_allowed
      createdAt
      updatedAt
    }
  }
`;
export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const createWordLimit = /* GraphQL */ `
  mutation CreateWordLimit(
    $input: CreateWordLimitInput!
    $condition: ModelWordLimitConditionInput
  ) {
    createWordLimit(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateWordLimit = /* GraphQL */ `
  mutation UpdateWordLimit(
    $input: UpdateWordLimitInput!
    $condition: ModelWordLimitConditionInput
  ) {
    updateWordLimit(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteWordLimit = /* GraphQL */ `
  mutation DeleteWordLimit(
    $input: DeleteWordLimitInput!
    $condition: ModelWordLimitConditionInput
  ) {
    deleteWordLimit(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
