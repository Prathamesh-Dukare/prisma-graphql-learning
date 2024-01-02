import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser, { json } from "body-parser";
import { prismaClient } from "../client/db";

export async function initServer() {
  const app = express();
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
        }
        `,
    resolvers: {
      Query: {
        hello: () => "Hello world!",
      },
    },
  });

  // * create a row
  // prismaClient.user.create({
  //   data: {
  //     email: "pra@gmail.cm"
  //   }
  // });

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  return app;
}
