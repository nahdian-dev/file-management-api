const routeNotFound = (req, res, next) => {
    if (res.status(404)) {
        throw new Error('Page not Found!');
    }
    next();
}

module.exports = routeNotFound;