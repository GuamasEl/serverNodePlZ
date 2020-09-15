const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');

router.get('/:userId', function(req, res){
    controller.listChats(req.params.userId)
            .then(userList => {
                response.success(req, res, userList, 200);
            })
            .catch(err => {
                response.error(req, res, 'Inesperado', 500);
            })
});


router.post('/', function(req, res){
    controller.addChat(req.body.users)
            .then(data => {
                response.success(req, res, data, 201);
            })
            .catch(err => {
                response.error(req, res, 'Internal error', 500);
            });
});


module.exports = router;