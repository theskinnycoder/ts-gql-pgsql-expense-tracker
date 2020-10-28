# **PERN-Stack Expense-Tracker using Apollo, TypeScript, and GraphQL**

> An Expense Tracker Web-App built using TypeORM, TypeGraphQL, GraphQL Code Generator etc

## **A. Environemnt Variables**

- Create a **`.env`** file in the project root and add the required data

```env
PORT = 4000
TYPEORM_URI = <Your DB's Connection String>
```

## **B. Install Dependencies**

1. **Install the Server's Dependencies**

```bash
cd server
npm intsall # yarn install
```

2. **Install the Client's Dependencies**

```bash
cd client
npm intsall # yarn install
```

## **C. Scripts**

1. **Main start script**: **`npm start`** or **`yarn start`** : Runs the whole app in production mode with _`node`_
2. **Main dev script**: **`npm run dev`** or **`yarn run dev`** : Runs both the client and the server in development mode with _`nodemon`_
3. **Server in Dev Mode**: **`npm run server`** or **`yarn run server`** : Runs the server in development mode with _`nodemon`_
4. **Run Client**: **`npm run client`** or **`yarn run client`** : Runs the client's **`react-script start`**
5. **Watch TypeScript**: **`tsc -w`** : Compiles TS to ES-6
