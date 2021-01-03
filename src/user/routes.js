const express = require('express');

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({});
});

routes.get('/getUser', (req, res) => {
    res.status(200).json({
        'test': 1
    });
});

module.exports = {
    routes
};