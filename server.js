const express = require('express');
var app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');

const db = require('./db');
db('mongodb+srv://acanonm:laH2rhNPj7A6SbKC@cluster0.vpohw.mongodb.net/telegrom?retryWrites=true&w=majority');

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/app', express.static('public'));

socket.connect(server);
router(app);


server.listen(3000,function(){
    console.log('Escuchando 3000');
});

console.log('Arranco en 3000'); 

