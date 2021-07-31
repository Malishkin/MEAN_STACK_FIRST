const express = require('express');
const usersBL = require('../models/usersBL');

const router = express.Router();

router.route('/')
    .get(function(req, resp)
    {
        usersBL.getUsers().then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        usersBL.getUser(id).then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/:id')
    .delete(function(req, resp)
    {
        let id = req.params.id;

        console.log(id)

        usersBL.deleteUser(id).then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;


        usersBL.updateUser(id,obj).then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body;
        console.log(obj);

        usersBL.addUser(obj).then(data =>
            {
                return resp.json(data);
            })
    })


module.exports = router;