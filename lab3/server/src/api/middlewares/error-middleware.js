const ApiError = require('../ErrorHandler');

module.exports = function(err, req, res, next) {
    try {
        if (err instanceof ApiError) {
            return res.status(err.status).json({ message: err.message, errors: err.errors });
        }

        return res.status(500).json({ message: 'Unexpected error' });
    } catch (e) {
        next();
    }
};
