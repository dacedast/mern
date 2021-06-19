const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticator');
const userController = require('../controllers/user');

router.get('/', authenticateJWT, userController.readAll);
router.delete('/:userId', authenticateJWT, userController.delete);

module.exports = router;