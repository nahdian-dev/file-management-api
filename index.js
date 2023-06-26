const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connection/file_management_connection');
const errorHandler = require('./middleware/error_handler');
const routeNotFound = require('./middleware/route_not_found');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8001;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

// EJS template engine
app.set('view engine', 'ejs');

// Routing
app.use('/api', require('./routes/file_routes'));
app.use('/views', require('./routes/views_route'));

// Error Handling
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});