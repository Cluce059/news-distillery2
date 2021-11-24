const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    users: [User]
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    articleCount: Int
    savedArticles: [Article]
}

type Article{
    articleId: String
    creator: String
    title: String
    link: String
    description: String
    image_url: String
    content: String
}

type Auth {
    token: ID!
    user: User
}

input articleInput{
    articleId: String
    creator: String
    title: String
    description: String
    image_url: String
    link: String
    content: String
}

type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveArticle(input: articleInput!): User
    removeArticle(articleId: String): User
} 
`;
//  https://egghead.io/lessons/apollo-wrap-graphql-mutation-arguments-with-a-graphql-input-type
module.exports = typeDefs;
//   
