const organizationTypeDefs = `#graphql
    type Organization {
        id: ID!
        name: String!
        code: String!
        status: String!
        createdAt: String!
        subsidiaries: [Subsidiary!]!
    }

    extend type Query {
        organizations: [Organization!]!
        organization(id: ID!): Organization
    }
`;

export = organizationTypeDefs;