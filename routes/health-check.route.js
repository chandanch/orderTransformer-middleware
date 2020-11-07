const express = require('express')
const router = express.Router();
const healthController = require('../controllers/health-check.controller')

router.route('/')
.get(async (request, response) => {
   try {
    const message = await healthController.checkHealth()
    response.status(200).send({status: 'OK', message});
   } catch (error) {
        response.status(500).send({status: 'failed', error});
   }
});

module.exports = router;