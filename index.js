const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./connection/file_management_connection');
const errorHandler = require('./middleware/error_handler');
const routeNotFound = require('./middleware/route_not_found');

const app = express();
const port = process.env.PORT || 8001;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

// EJS template engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views', 'pages'));

// Routing
app.use('/api', require('./routes/file_routes'));
app.use('/', require('./routes/views_route'));

// Error Handling
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`- Server are listening on port: ${port}`);
});
