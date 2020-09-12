const store = require('./store');


function addMessage(user, message){
    return new Promise((resolve, reject) =>{
        if(!user || !message)
        {
            console.log('[addMessage] mal');
            reject('Datos incorrectos');
            return false;
        }
    
    
        const fullMessage = {
            user:user,
            message:message,
            date : new Date()
        };

        store.add(fullMessage);
        console.log(fullMessage);
        resolve(fullMessage);
  
    });

}


function getMessage(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}


function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {

        console.log(id);
        console.log(message);
        if(!id || !message){
            reject('invalid data');
            return false;
        }
        
        const result = await store.updateText(id,message);
        resolve(result);
    });
}

function deleteMessage(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            reject('Id invalido');
            return false;
        }

        store.remove(id)
            .then(()=>{
                resolve();
            })
            .catch(e => {
                console.error(e);
                reject(e);
            });

    });
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}