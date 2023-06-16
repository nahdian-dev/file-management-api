const errorConstant = require('../error_constant');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case errorConstant.BAD_REQUEST:
            res.json({
                title: "BAD_REQUEST",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.NOT_FOUND:
            res.json({
                title: "NOT_FOUND",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.METHOD_NOT_ALLOWED:
            res.json({
                title: "METHOD_NOT_ALLOWED",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.INTERNAL_SERVER_ERROR:
            res.json({
                title: "INTERNAL_SERVER_ERROR",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.SERVICE_UNAVAILABLE:
            res.json({
                title: "SERVICE_UNAVAILABLE",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case errorConstant.GATEWAY_TIMEOUT:
            res.json({
                title: "GATEWAY_TIMEOUT",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            res.json({
                title: "HTTP ERROR!",
                message: err.message,
                stackTrace: err.stack
            })
            break;
    }
    next()
}

module.exports = errorHandler;