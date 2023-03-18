const { customAlphabet } = require('nanoid');
let nanoid = customAlphabet("1234567890abcdef", 8);
const UrlManager = require('../models/UrlModel');

const postUrlController = async (req, res) => {
    try {
        const { longUrl } = req.body;
        let shortUrl = nanoid();
        const dbCall = await UrlManager.insertUrl(longUrl, shortUrl, req.userId);
        if (dbCall == null) {
            res.status(400).json('Data base call failed').end();
        }
        res.status(200).json(dbCall).end();
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error creating URL" }).end();
    }
};

module.exports = postUrlController;