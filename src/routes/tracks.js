const express = require('express');
const {getItem, getItems, createItem} = require('../controllers/tracks');
const router = express.Router(); //  eslint-disable-line new-cap

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);

module.exports = router;
