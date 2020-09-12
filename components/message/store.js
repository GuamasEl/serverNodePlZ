const db = require('mongoose');
const Model = require('./model');

const { Message } = require('twilio/lib/twiml/MessagingResponse');
//mongodb+srv://acanonm:laH2rhNPj7A6SbKC@cluster0.vpohw.mongodb.net/telegrom?retryWrites=true&w=majority

db.Promise = global.Promise;
db.connect('mongodb+srv://acanonm:laH2rhNPj7A6SbKC@cluster0.vpohw.mongodb.net/telegrom?retryWrites=true&w=majority',{
    useNewUrlParser: true
});
console.log('[Conexion exitosa a DB]');

const list = [];

function addMessage(message){
    //list.push(message);
    const newMessage = new Model(message);
    newMessage.save();

}

async function getMessages(filterUser){
    //return list;
    let filter = {};
    if(filterUser!== null)
    {
        filter = { user: filterUser}; 
    }

    const messages = await Model.find(filter);
    return messages;

}

async function updateText(id, message)
{
    const message1 = await Model.findOne({
        _id: id
    });

    message1.message = message;

    const newMesage = await message1.save();

    return newMesage;
}

async function removeMessage(id){
    return await Model.deleteOne({
        _id:id
    });
}

module.exports = {
    add : addMessage,
    list : getMessages,
    updateText : updateText,
    remove: removeMessage
}