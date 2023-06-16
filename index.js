const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connection/file_management_connection');
const errorHandler = require('./middleware/error_handler');
const routeNotFound = require('./middleware/route_not_found');

const app = express();
const port = process.env.PORT || 8001;

connectDB();

// EJS template engine
app.set('view engine', 'ejs');

// Routing
app.use('/views', require('./routes/views_route'));
app.use('/api', require('./routes/file_routes'));

// Middleware akses file statis
app.use('/node_modules', express.static('node_modules'));

// Error Handling
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});