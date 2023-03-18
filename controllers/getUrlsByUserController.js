const UrlManager = require('../models/UrlModel');
const mongoose = require('mongoose');

const getUserUrlsController = async (req, res) => {
  try {
    const userId = req.userId;
    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    const dbCall = await UrlManager.getUserUrls(req.userId);
    res.status(200).json(dbCall).end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error getting user URLs" }).end();
  }
};

module.exports = getUserUrlsController;