const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const asyncHandler = require('express-async-handler');

const connectDB = asyncHandler(async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`- Connected to DB: ${conn.connection.name}`);
    } catch (error) {
        console.log(`- Connect DB failure : ${error}`);
    }
});

module.exports = connectDB;