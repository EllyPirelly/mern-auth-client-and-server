const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');

const dotenv = require('dotenv');
dotenv.config();
// process.env gives access to .env file
const database = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

const app = express();

mongoose
  .connect(database, {
    // use the new URL parser to parse MongoDB connection strings
    useNewUrlParser: true,
    // use the new Server Discovery and Monitioring engine
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB is connected successfully'))
  .catch((err) => console.error(err));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(cookieParser());

// express.json adds a body property to the request object
// includes the parsed JSON data in request body
app.use(express.json());

app.use('/', authRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});