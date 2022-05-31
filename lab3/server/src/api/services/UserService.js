require('dotenv').config();
const Users = require('../../../models/Users');
const bcrypt = require('bcrypt');
const ApiError = require('../ErrorHandler');
const jwt = require('jsonwebtoken');

class UserService {
    async signUp(firstName, lastName, email, password) {
        const candidate = await Users.findOne({ where: { email } });
        if (candidate) {
            throw ApiError.BadRequest('User with such email exists', { Email: 'not unique' });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await Users.create({ firstName, lastName, email, password: hashedPassword });

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );


        return {
            id: user.id,
            email: user.email,
            token
        };
    }

    async signIn(email, password) {
        const user = await Users.findOne({ where: { email } });
        if (!user) {
            throw ApiError.BadRequest('User not found', { email: 'not found' });
        }

        const issPassEquals = await bcrypt.compare(password, user.password);
        if (!issPassEquals) {
            throw ApiError.BadRequest('Wrong email or password', {});
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );

        return {
            token
        };
    }

    async checkAuth(userId) {
        const user = await Users.findOne({ where: { id: userId } });
        if (!user) {
            throw ApiError.BadRequest('User not found', { email: 'not found' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );
        console.log(user);

        return {
            token,
            user: { email: user.email, firstName: user.firstName, lastName: user.lastName }
        };
    }

}

module.exports = new UserService();
