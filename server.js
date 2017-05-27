'use strict';
const Sequelize = require('sequelize');
const express = require('express');
const db = new Sequelize('postgres://laq:password@laq-postgres:5432/admin');


const PORT = 8080;

const app = express();
setTimeout(()=>{
  db
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}, 2000)


app.get('/', (req, res) => {
  res.send('HELLO  :) WORLD\n');
})

app.listen(PORT);
console.log('Running on localhost:' + PORT);
