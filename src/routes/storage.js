const express = require('express');
const router = express.Router(); //  eslint-disable-line new-cap
const {createArchive} = require('../controllers/storage');
const uploadMiddleware = require('../utils/handleStorage');

router.post('/', uploadMiddleware.single('myfile'), createArchive);

module.exports = router;
