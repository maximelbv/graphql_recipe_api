const { ApolloServer } = require("apollo-server");
const { mongoose } = require("mongoose");

const MONGODB_CONNEXION_STRING =
  "mongodb+srv://maximelbv:berlingo60@cookbook.fdiqzz0.mongodb.net/?retryWrites=true&w=majority&appName=Cookbook";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB_CONNEXION_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connexion successful");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
