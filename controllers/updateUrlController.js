const Url = require('../models/schemas/Url');

const urlController = {};

urlController.updateUrlById = async (req, res) => {
  const { id } = req.params;
  const { longUrl, shortUrl } = req.body;
  try {
    const updatedUrl = await Url.findByIdAndUpdate(id, { longUrl, shortUrl }, { new: true });
    res.json(updatedUrl);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = urlController;