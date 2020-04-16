const { Router } = require('express');

const routes = Router();

const DevController = require('../src/controllers/DevController');
const LikeController = require('../src/controllers/LikeController');
const DislikeController = require('../src/controllers/DislikeController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;