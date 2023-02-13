const express = require('express');
const app = express();
const members = require('./members');
const getUsers = require('./users');
const moment = require('moment');

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', async (req, res) => {
  const today = moment().toISOString();
  const about = {
    status: 'success',
    message: 'response success',
    description: 'Exercise #03',
    date: today,
    data: members
  };
  res.json(about);
});

app.get('/users', async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
