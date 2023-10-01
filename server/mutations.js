import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $name: String!
    $family_name: String
    $given_name: String
    $nickname: String
    $picture: String
  ) {
    createUser(
      input: {
        email: $email
        name: $name
        family_name: $family_name
        given_name: $given_name
        nickname: $nickname
        picture: $picture
      }
    )
  }
`;