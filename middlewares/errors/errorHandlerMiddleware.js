const multer = require('multer');

const defaultErrorHandlerMiddleware = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) res.status(500).send(err.message);
        else res.status(500).send(err.message);
    } else {
        res.send('Success.!!')
    }
}

module.exports = {
    defaultErrorHandlerMiddleware
}