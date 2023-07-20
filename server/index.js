const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
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
    origin: ['http://localhost:4000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// express.json adds a body property to the request object
// includes the parsed JSON data in request body
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});