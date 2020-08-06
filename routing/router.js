const 
    express = require('express'),
    router = express.Router(),
    healthcheckMiddleware = require('../middleware/healthcheckMiddleware'),
    pingMiddleware = require('../middleware/pingMiddleware');

module.exports.config = function () {

    router.get('/healthcheck', healthcheckMiddleware.healthcheck)

    router.get('/ping-data', pingMiddleware.getPingData)
    router.post('/ping-data', pingMiddleware.storePingData)
    router.delete('/ping-data', pingMiddleware.deletePingData)

    return router;
}