const mongoose = require('mongoose');
const connectDB = require('../config/db');

const urlSchema = require('./schemas/Url');

class UrlManager {
    static insertUrl = async (longUrl, shortUrl, userId) => {
        connectDB();
        const dbCall = await urlSchema.create({
            longUrl: longUrl,
            shortUrl: shortUrl,
            user: userId
        });
        return dbCall
    }

    static async getUserUrls(userId) {
        connectDB();
        const urls = await urlSchema.find({ user: userId });
        return urls;
    }
}

module.exports = UrlManager;