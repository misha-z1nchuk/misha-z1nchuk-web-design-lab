require('dotenv').config();

const ApiError = require('../ErrorHandler');
const Users = require('../../../models/Users');
const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = jwt.verify(accessToken, process.env.JWT_SECRET);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        const user = await Users.findOne({ where: { id: userData.userId } });
        if (!user) {
            return next(ApiError.UnauthorizedError());
        }

        req.userId = user.id;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};
