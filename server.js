const express = require("express");
const path = require("path");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolvers = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

async function startServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const apoloServer = new ApolloServer({
    schema,
  });
  await apoloServer.start();

  apoloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, () => {
    console.log("graphql server is ready on port 3000");
  });
}
startServer();
