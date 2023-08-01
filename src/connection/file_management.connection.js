const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const config = require('../config/config');

const connectDB = asyncHandler(async () => {
    try {
        const conn = await mongoose.connect(config.value.CONNECTION_STRING);
        console.log(`- Connected to DB: ${conn.connection.name}`);
    } catch (error) {
        console.log(`- Connect DB failure : ${error}`);
    }
});

module.exports = connectDB;