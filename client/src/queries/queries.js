import {gql} from "@apollo/client";

const getAuthorQuery = gql`
  query GetData {
    authors {
      name
      id
      age
    }
  }`;

const getBooksQuery = gql`
    query GetData {
      books {
        name
        id
        genre
      }
    }`;
const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID) {
        book(id: $id) {
            name
            genre
            id
            author {
                name
                age
                id
                books {
                    name
                    genre
                    id
                }
            }
        }
    }`;

export {getAuthorQuery, getBooksQuery, addBookMutation, getBookQuery};