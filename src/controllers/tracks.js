const {tracksModel} = require('../models');
const {handleHttpError} = require('../utils/handleErrors');

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find();
    res.send({data});
  } catch (error) {
    handleHttpError(res, 'ERROR_FIND_ITEMS');
  }
};

const getItem = async (req, res) => {
  try {
    const data = await tracksModel.findOne();
    res.send({data});
  } catch (error) {
    handleHttpError(res, 'ERROR_FIND_ITEMS');
  }
};

const createItem = async (req, res) => {
  try {
    const {body} = req;
    const data = await tracksModel.create(body);
    res.status(201);
    res.send({data});
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS');
  }
};

const upadateItem = (req, res) => {
  try {

  } catch (error) {
    handleHttpError(res, 'ERROR_UPADATE_ITEMS');
  }
};

const deleteItem = (req, res) => {
  try {

  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_ITEMS');
  }
};

module.exports = {getItems, getItem, createItem, upadateItem, deleteItem};
