const UserService = require('../services/UserService');

class UserController {

    async signUp(req, res, next) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const result = await UserService.signUp(firstName, lastName, email, password);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }

    }

    async signIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await UserService.signIn(email, password);
            res.status(200).json(result);
        } catch (e) {
            next(e);
        }
    }


    async checkAuth(req, res, next) {
        try {
            const result = await UserService.checkAuth(req.userId);
            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

module.exports = new UserController();
