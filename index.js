const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connection/file_management_connection');

const app = express();
const port = process.env.PORT || 8001;

connectDB();

app.use('/api', require('./routes/file_routes'));

app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});