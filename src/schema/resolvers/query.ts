import organizationResolvers = require("./organization.resolver")
import subsidiaryResolvers = require("./subsidiary.resolver")
import userResolvers = require("./user.resolver")
const Query = {
    ...organizationResolvers.Query,
    ...subsidiaryResolvers.Query,
    ...userResolvers.Query,
}

module.exports = Query;