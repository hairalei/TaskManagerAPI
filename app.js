const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();

const port = 3000;

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
