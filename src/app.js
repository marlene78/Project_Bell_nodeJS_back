const express = require('express');
const server = express();


const cors = require('cors');
server.use(cors({
    AccessControlAllowOrigin: "*"
}));


const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/projet_bell');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

const postRoute = require('./api/routes/bellRoute');
postRoute(server);

server.listen(port, hostname);