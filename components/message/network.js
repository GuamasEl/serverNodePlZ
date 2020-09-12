const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');


router.get('/', function(req, res){
    console.log(req.headers);

    const filterMessages = req.query.user || null;

    controller.getMessage(filterMessages)
                .then((messageList) =>{
                    response.success(req, res, messageList, 200);
                } )
                .catch(e => {
                    response.error(req, res, 'Inesperado', 200);
                });


});

router.delete('/:id', function(req, res){
    controller.deleteMessage(req.params.id)
            .then(() => {
                response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
            })
            .catch(e => {
                response.error(req, res, 'Error interno', 500);
            })
 
});

router.post('/', function(req, res){

    controller.addMessage(req.body.user, req.body.message)
            .then((data) => {
                response.success(req, res, data, 201);
            })
            .catch(e=> {
                response.error(req, res, 'Error simulado', 400);
            });

});

router.patch('/:id', function(req, res){
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
             .then((data)=> {
                 response.success(req, res, data,200);
             })
             .catch(e => {
                 response.error(req,res, 'Error interno', 500);
             });
});

module.exports = router;