import baseTypeDefs = require("./base.typeDefs");
import organizationTypeDefs = require("../modules/organization/organization.typeDefs");
import subsidiaryTypeDefs = require("../modules/subsidiary/subsidiary.typeDefs");
import userTypeDefs = require("../modules/user/user.typeDefs");

import organizationResolvers = require("../modules/organization/organization.resolver");
import subsidiaryResolvers = require("../modules/subsidiary/subsidiary.resolver");
import userResolvers = require("../modules/user/user.resolver");

const typeDefs = [
    baseTypeDefs,
    organizationTypeDefs,
    subsidiaryTypeDefs,
    userTypeDefs,
];

const resolvers = [
    organizationResolvers,
    subsidiaryResolvers,
    userResolvers,
];

export = { typeDefs, resolvers };