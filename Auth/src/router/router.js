const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/middleware')


Router.post('/login', authController.login,bind(authController))