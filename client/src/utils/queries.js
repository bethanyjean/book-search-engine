import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        _id: ID
        authors: array
        image: String
        link: String
        title: String
      }
    }
  }
`;