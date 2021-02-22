const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const PORT = process.env.PORT || 4000

const app = new ApolloServer({
    resolvers,
    typeDefs,
})

app.listen(PORT, () => console.log(PORT))
