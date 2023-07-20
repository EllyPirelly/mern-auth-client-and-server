# React Auth App - WIP

Befor ANY run command, ALWAYS check if you are in the correct directory! <br>
There are 2 directories:
- `client` - which is the React.js frontend
- `server` - which is the Node.js, MongoDB, Express.js backend

## What is this about
- JWT-based User Authentication (verification, validation of user credentials) & Authorization (access to particular areas of application, depending on level of authorization)
- MERN stack
  - MongoDB NoSQL database
  - Express.js framework for/in Node.js, that offers functionality out of the box
  - React.js JavaScript library for the client-side
  - Node.js JavaScript runtime environment for the server-side

## Client (frontend)
- start client with `npm start`

### Dependencies
- `react` - React.js and all of the depencencies coming with `npx create-react-app`

## Server (backend)
- MongoDB NoSQL database
- start client with `npm start`

### Dependencies
- `bcrypt` - for password hashing
- `cookie-parser` - middleware, to handle cookie-based sessions
- `cors` - middleware, to enable Cross-Origin Resource Sharing for an Express.js application
- `dotenv` - to configure and separate data that is NOT supposed to be committed (environment variables)
- `express` - Node.js framework of choice
- `jsonwebtoken` - to create and verify JSON Web Tokens
- `mongoose` - for defining the data schema, for data modeling the business logic, for creating the models/the business logic layer and for connecting to the database on MongoDB Atlas
- `nodemon` - to automatically restart Node.js whenever a change has been made to the code
