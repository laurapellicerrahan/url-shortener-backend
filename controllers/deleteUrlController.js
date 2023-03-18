const Url = require('../models/schemas/Url');

const urlController = {};

urlController.deleteUrl = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUrl = await Url.findByIdAndRemove(id);
    if (!deletedUrl) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.json({ message: "URL deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = urlController;