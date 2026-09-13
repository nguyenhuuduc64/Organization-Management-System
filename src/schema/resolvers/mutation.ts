import userResolvers = require("./user.resolver");
const Mutation = {
    ...userResolvers.Mutation
}

export = Mutation;