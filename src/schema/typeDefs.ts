const typeDefs = `#graphql
    type Organization {
        id: ID!
        name: String!
        code: String!
        status: String!
        createdAt: String!
        subsidiaries: [Subsidiary!]!
    }

    type Subsidiary {
        id: ID!
        organizationId: ID!
        name: String!
        code: String!
        country: String
        status: String!
        createdAt: String!
        organization: Organization!
        users: [User!]!
    }

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

    type Query {
        organizations: [Organization!]!

        organization(id: ID!): Organization

        subsidiaries: [Subsidiary!]!

        subsidiary(id: ID!): Subsidiary

        users: [User!]!

        user(id: ID!): User
    }

    type Mutation {
        createUser(user: CreateUserInput!): User!
    }
`;

module.exports = typeDefs;
