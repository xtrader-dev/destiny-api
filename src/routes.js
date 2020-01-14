const routes = require('express').Router();
const authMiddleware = require('./app/middleware/auth');
const SessionController = require('./app/controllers/SessionController');
const UserController = require('./app/controllers/UserController');
const ClientController = require('./app/controllers/ClientController');

routes.post('/api/auth', SessionController.store);

// routes.use(authMiddleware);

routes.post('/api/new-user', UserController.create);
routes.get('/api/get-users', UserController.findAll);

routes.post('/api/new-client', ClientController.create);

module.exports = routes;
