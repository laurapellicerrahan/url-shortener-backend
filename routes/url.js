const express = require('express');
const router = express.Router();

const Url = require('../models/schemas/Url');

const postUrlController = require('../controllers/postUrlController');
const verifyJWT = require('../middleware/verifyJWT');
router.post('/cut', verifyJWT, postUrlController);

const getUserUrlsController = require('../controllers/getUrlsByUserController');
router.get('/urls', verifyJWT, getUserUrlsController);

let getUrlController = require('../controllers/getUrlController');
router.get('/cut', getUrlController.getAllUrls);

let getSingleUrlController = require('../controllers/getSingleUrlController');
router.get('/:id', getSingleUrlController.getUrlById);

let updateUrlController = require('../controllers/updateUrlController');
router.put('/:id', updateUrlController.updateUrlById);

let deleteUrlController = require('../controllers/deleteUrlController');
router.delete('/:id', deleteUrlController.deleteUrl);

module.exports = router;