const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const CustomApiError = require('./src/utilities/CustomApiError');
const connectDB = require('./src/connection/file_management.connection');
const config = require('./src/config/config');
const routes = require('./src/routes/index.route');
const { errorConverter, errorHandler } = require('./src/middlewares/error_handler.middleware');

// Instance
const app = express();

// connection
connectDB();

// EJS template engine
app.set('views', path.join(__dirname, 'src', 'views', 'pages'));
app.set('view engine', 'ejs');

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.use('/', routes);

// Error Handler
app.use((req, res, next) => {
  next(new CustomApiError(404, "Not found"));
});
app.use(errorConverter);
app.use(errorHandler);

app.listen(config.value.PORT, () => {
  console.log(`- Server are listening on port: ${config.value.PORT}`);
});
