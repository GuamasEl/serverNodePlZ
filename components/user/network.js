const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');

router.get('/', function(req, res){
    controller.getUsers()
            .then(userList => {
                response.success(req, res, userList, 200);
            })
            .catch(err => {
                response.error(req, res, 'Inesperado', 500);
            })
});


router.post('/', function(req, res){
    controller.addUser(req.body.name)
            .then(data => {
                response.success(req, res, data, 201);
            })
            .catch(err => {
                response.error(req, res, 'Internal error', 500);
            });
});


module.exports = router;