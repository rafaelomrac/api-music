const {storageModels} = require('../models');
const {handleHttpError} = require('../utils/handleErrors');

const createArchive = (req, res) => {
  try {
    res.send({a: 1});
    res.status(201);
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
};

module.exports = {createArchive};
