const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        languages: [Language!]!
        routes(routeId: Int): [Route!]!
        stacks: [Stack!]!
        specializations: [Specialization!]!
    }

    type Mutation {
        addLanguage(name: String!): MutationResponse!
        addRoute(name: String!): MutationResponse!
        addStack(name: String!, routeId: Int!): MutationResponse!
        addSpecialization(name: String!): MutationResponse!
    }

    type Language {
        id: Int!
        name: String!
    }

    type Route {
        id: Int!
        name: String!
    }

    type Stack {
        id: Int!
        name: String!
        route: Route!
        language: Language!
    }
    type Specialization {
        id: Int!
        name: String!
    }

    type Error {
        code: Int!
    }

    union MutationResponse = Language | Error
`

module.exports = { typeDefs }
