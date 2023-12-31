// const express = require('express');
// const router = require('./routes/index')

// const server = express();
const { server } = require('./app')
const { conn } = require('./DB_connection')

const PORT = 3001;

server.listen(PORT, () => {
   conn.sync({ force: false });
   console.log('Server raised in port: ' + PORT);
});
