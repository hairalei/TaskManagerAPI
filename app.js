const tasks = require('./routes/tasks');
const express = require('express');

const app = express();

const port = 3000;

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => console.log(`Listening on port ${port}!`));
