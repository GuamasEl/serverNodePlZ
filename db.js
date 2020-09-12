const db = require('mongoose');
db.Promise = global.Promise;
//'mongodb+srv://acanonm:laH2rhNPj7A6SbKC@cluster0.vpohw.mongodb.net/telegrom?retryWrites=true&w=majority'
async function connect(url){
    await db.connect(url,{
        useNewUrlParser: true
    });
    console.log('[Conexion exitosa a DB]');

}

module.exports = connect;