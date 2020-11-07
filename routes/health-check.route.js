const express = require('express')
const router = express.Router();
const healthController = require('../controllers/health-check.controller')

router.route('/')
.get((request, response) => {
    const message = healthController.checkHealth('check health')
    response.status(200).send({status: 'OK', message});
});

module.exports = router;