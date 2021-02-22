const Query = require('./queries')

const resolvers = {
    Query: {
        languages: () => Query.languages(),
        routes: () => Query.routes() /* routeId */,
        stacks: () => Query.stacks(),
        specializations: () => Query.specializations(),
    },

    Mutation: {
        addLanguage: async (_, args) => {
            try {
                const newLanguage = await Query.createLanguage(args)

                return { ...newLanguage, __typename: 'Language' }
            } catch (error) {
                return {
                    __typename: 'Error',
                    code: error.code || 0,
                }
            }
        },
    },

    Language: {
        id: (language) => language.language_id,
        name: (language) => language.language_name,
    },

    Route: {
        id: (route) => route.route_id,
        name: (route) => route.route_name,
    },

    Stack: {
        id: (stack) => stack.stack_id,
        name: (stack) => stack.stack_name,
    },

    Specialization: {
        id: (specialization) => specialization.specialization_id,
        name: (specialization) => specialization.specialization_name,
    },
}

module.exports = { resolvers }


