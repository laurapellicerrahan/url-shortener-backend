const jwt = require('jsonwebtoken');
const Url = require('../models/schemas/Url');

const urlController = {};

urlController.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = urlController;