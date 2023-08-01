const express = require("express");

const viewsRoute = require('./views.route');
const fileRoute = require('./file.route');

// Instance
const router = express.Router();

const routes = [
    {
        path: "/",
        route: viewsRoute,
    },
    {
        path: "/api",
        route: fileRoute,
    },
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;