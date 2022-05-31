const CommentService = require('../services/CommentService');

class CommentController {

    async create(req, res, next) {
        try {
            const { body } = req.body;
            const { postId } = req.params;
            const comment = await CommentService.create(body, postId, req.userId);
            res.status(200).json(comment);
        } catch (e) {
            next(e);
        }

    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await CommentService.delete(id);

            res.status(200).json({ message: 'ok' });
        } catch (e) {
            next(e);
        }
    }

    async list(req, res, next) {
        try {
            const { id } = req.body;
            const posts = await CommentService.list(id);

            res.status(200).json({
                data: posts
            });
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
}

module.exports = new CommentController();
