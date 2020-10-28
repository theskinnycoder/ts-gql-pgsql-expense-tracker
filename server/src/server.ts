import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

import Transaction from './entities/Transaction';
import { TransactionResolvers } from './resolvers/transactionResolvers';

// DotENV Config
config();

// Extract Required Variables
const { PORT, NODE_ENV, TYPEORM_URL } = process.env;

// Main Async Function to listen for requests only after connecting to the DB
(async () => {
	// Create the DB Connection
	const conn = await createConnection({
		type: 'postgres',
		url: TYPEORM_URL,
		logging: NODE_ENV === 'development',
		synchronize: true,
		entities: [Transaction],
	});

	console.log(`Connected to the PostgreSQL Database ${conn.name}`);

	// Create an Express Web-App Instance
	const app = Express();

	// Create an Apollo-Server Instance
	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [TransactionResolvers],
		}),
	});

	// Apply the Express Web-App as middleware to the Apollo-Server
	server.applyMiddleware({ app });

	// Keep listening for requests
	app.listen(PORT, () =>
		console.log(
			`Server up and running in ${NODE_ENV} mode and is listening for requests at http://localhost:${PORT}${server.graphqlPath}`
		)
	);
})();
