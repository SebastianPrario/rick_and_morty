const express = require('express');
 const mainRouter = require ('./routes/')
const {Router} = require ('express')
const { conn } = require('./DB_connection')

const server = express ();
const PORT = 3001;

conn
.sync({ force : false}) 
.then( () => {
   server.listen(PORT, () => {
   console.log ('server ready')
   })
   })
.catch((err) => console.log(err))


server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


server.use("/rickandmorty",mainRouter)

