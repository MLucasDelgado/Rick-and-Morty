/* Controllers */
const { getCharById } = require('../controllers/getCharById');
const { deleteFav } = require('../controllers/deleteFav');
const { postFav } = require('../controllers/postFav');
const { postUser } = require('../controllers/postUser')
const login = require('../controllers/login');

/* Express config */
const express = require('express')
const router = express.Router()

/* routes */
router.get('/character/:id', getCharById);
router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router
