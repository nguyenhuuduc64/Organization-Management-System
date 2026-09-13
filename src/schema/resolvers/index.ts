import Mutation = require("./mutation")
import Query = require("./query")

const organizationResolvers = require("./organization.resolver")
const subsidiaryResolvers = require("./subsidiary.resolver")
const userResolvers = require("./user.resolver")
const resolvers = {
      Query, Mutation,
      Organization: {
      ...organizationResolvers.Organization,
      },
      Subsidiary: {
      ...subsidiaryResolvers.Subsidiary,
      }, 
      User: {
      ...userResolvers.User,
      }
}

export = resolvers;