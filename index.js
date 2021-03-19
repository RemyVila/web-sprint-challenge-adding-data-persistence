// start your server here
const express = require('express');
const server = express();

server.use(express.json());

const PORT = process.env.NODE_ENG || 9000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})