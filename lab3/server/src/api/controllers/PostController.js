const PostService = require('../services/PostService');

class PostController {

    async create(req, res, next) {
        try {
            const { title, body } = req.body;
            const post = await PostService.create(title, body, req.userId);
            res.status(200).json(post);
        } catch (e) {
            next(e);
        }

    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await PostService.delete(id, req.userId);

            res.status(200).json({ message: 'ok' });
        } catch (e) {
            next(e);
        }
    }

    async list(req, res, next) {
        try {
            const { id } = req.body;
            const posts = await PostService.list(id);

            res.status(200).json({
                data: posts
            });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new PostController();
