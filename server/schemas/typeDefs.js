const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    SavedBooks: [Book]
    bookCount: Int
}

type Book {
    _id: ID!
    authors: String!
    description: Sting!
    image: String
    link: String
    title: String!
    bookId: ID!

}
input Bookinput {
    authors: String!
    description: Sting!
    image: String
    link: String
    title: String!

}

type Auth {
    token: ID!
    user: User

}

type Query {
    me: User

}

type Mutation {
    login_user(username: String!, password: String!): Auth
    add_user(username: String!, password: String!, email: String!): Auth
    save_book(SavedBooks: Bookinput): User
    remove_book ( _id: ID!): User
}`

module.exports = typeDefs