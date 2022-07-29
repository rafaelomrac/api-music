const {tracksModel} = require('../models/index');

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find();
    res.send({data});
  } catch (error) {

  }
};

const getItem = async (req, res) => {
  try {
    const data = await tracksModel.findOne();
    res.send({data});
  } catch (error) {

  }
};

const createItem = async (req, res) => {
  try {
    const {body} = req;
    const data = await tracksModel.create(body);
    res.send({data});
  } catch (error) {
    console.log(error);
  }
};

const upadateItem = (req, res) => {
  try {

  } catch (error) {

  }
};

const deleteItem = (req, res) => {
  try {

  } catch (error) {

  }
};

module.exports = {getItems, getItem, createItem, upadateItem, deleteItem};
