// import { ApolloServer } from '@apollo/server';
// import { expressMiddleware } from '@apollo/server/express4';
// import cors from 'cors';
import { DataSource } from 'typeorm'
import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'
import { HelloWorldResolver } from './resolvers/HelloWorldResolver';

const dataSource = new DataSource({
        "type": "sqlite",
        "database": "database.sqlite",
        "synchronize": true,
        "logging": true,
        "entities": ["src/entity/**/*.ts"],
        "migrations": ["src/migration/**/*.ts"],
        "subscribers": ["src/subscriber/**/*.ts"],
});

(async () => {
    const app: any = express();

    await dataSource.initialize();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloWorldResolver]
        }),
        context: ({req, res}) => ({req, res}),
    });

    await server.start()

    server.applyMiddleware({
        app,
        cors: {
            origin: ['https://studio.apollographql.com', 'http://localhost:3000/']
        },
    });

    app.listen(4000, () => {
        console.log("Server Started: http://localhost:4000/graphql")
    })
})();