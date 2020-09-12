const express = require('express');
const bodyParser = require('body-parser');
//const router = require('./components/message/network');
const router = require('./network/routes');

const db = require('./db');
db('mongodb+srv://acanonm:laH2rhNPj7A6SbKC@cluster0.vpohw.mongodb.net/telegrom?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

app.use('/app', express.static('public'));

router(app);


app.listen(3000);
console.log('Arranco en 3000'); 

