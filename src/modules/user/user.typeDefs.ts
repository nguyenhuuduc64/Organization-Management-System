const userTypeDefs = `#graphql
    type User {
        id: ID!
        subsidiaryId: ID!
        email: String!
        fullName: String!
        role: String!
        status: String!
        createdAt: String!
        subsidiary: Subsidiary!
    }

    input CreateUserInput {
        subsidiaryId: ID!
        email: String!
        fullName: String!
        password: String!
        role: String
    }

    extend type Query {
        users: [User!]!
        user(id: ID!): User
    }

    extend type Mutation {
        createUser(user: CreateUserInput!): User!
    }
`;

export = userTypeDefs;