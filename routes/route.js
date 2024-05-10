const express = require('express');
const {addUser, getUsers} = require('./../controllers/userController');

const router = express.Router();

router.post('/add', addUser);
router.get('/users', getUsers);

module.exports = router;