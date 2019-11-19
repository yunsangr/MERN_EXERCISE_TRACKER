const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose'); // helps connect to mongoDB
require('dotenv').config(); // we can have env variable 

const app = express();
const port = process.env.PORT || 5000;

// Setting middlewares.
app.use(cors());
app.use(express.json()); // allow us to parse json


// Connect database.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

// Routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
// Type "nodemon server" to run the server!