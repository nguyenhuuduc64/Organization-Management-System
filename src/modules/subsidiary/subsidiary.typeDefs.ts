const subsidiaryTypeDefs = `#graphql
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

    extend type Query {
        subsidiaries: [Subsidiary!]!
        subsidiary(id: ID!): Subsidiary
    }
`;
export = subsidiaryTypeDefs;