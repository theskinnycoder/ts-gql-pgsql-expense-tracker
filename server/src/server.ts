import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';
import Express, { Request, Response, static as serveStatic } from 'express';
import { join } from 'path';
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

	// Serve the React App's built SPA as the main route in production
	if (NODE_ENV === 'production') {
		const root = join(__dirname, '../..', 'client', 'build');
		app.use(serveStatic(root));
		app.get('*', (_: Request, res: Response) =>
			res.sendFile('index.html', { root })
		);
	}

	// Keep listening for requests
	app.listen(PORT, () =>
		console.log(
			`Server up and running in ${NODE_ENV} mode and is listening for requests at http://localhost:${PORT}${
				NODE_ENV === 'development' ? server.graphqlPath : ''
			}`
		)
	);
})();
