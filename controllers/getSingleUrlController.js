const Url = require('../models/schemas/Url');

const urlController = {};

urlController.getUrlById = async (req, res) => {
  try {
    const url = await Url.findOne({shortUrl: req.params.id});
    res.json(url);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = urlController;