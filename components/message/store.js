
const { ReservationList } = require('twilio/lib/rest/taskrouter/v1/workspace/task/reservation');
const Model = require('./model');




const list = [];

function addMessage(message){
    //list.push(message);
    const newMessage = new Model(message);
    newMessage.save();

}

async function getMessages(filterUser){
    return new Promise((resolve, reject) =>
    {
        let filter = {};
        if(filterUser!== null)
        {
            filter = { user: filterUser}; 
        }
    
        Model.find(filter)
                    .populate('user')
                    .exec((error, populated)=>{
                        if(error){
                            reject(error);
                            return false;
                        }

                        resolve(populated);
                    });
               

    });
    

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
        _clerid:id
    });
}

module.exports = {
    add : addMessage,
    list : getMessages,
    updateText : updateText,
    remove: removeMessage
}