import { gql } from '../generated';

export const GET_USERS = gql(`
  query GetUsers {
    users {
      uId
      name
      email
      rId
      lname
      statement
      roleAdmin
      info
      coachUserId
      isCoach
      managerUserId
      phoneNumber
      textNotifications
    }
  }
`);

export const GET_USER = gql(`
  query GetUser($id: String!) {
    user(uId: $id) {
      uId
      name
      email
      rId
      lname
      statement
      roleAdmin
      info
      coachUserId
      isCoach
      managerUserId
      phoneNumber
      textNotifications
    }
  }
`);

export const GET_USER_BY_EMAIL = gql(`
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      uId
      name
      email
      rId
      lname
      statement
      roleAdmin
      info
      coachUserId
      isCoach
      managerUserId
      phoneNumber
      textNotifications
    }
  }
`);

export const CREATE_USER = gql(`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        uId
        name
        email
        rId
        lname
        statement
        roleAdmin
        info
        coachUserId
        isCoach
        managerUserId
        phoneNumber
        textNotifications
      }
    }
  }
`);
