const ApiError = require('../ErrorHandler');
const Comments = require('../../../models/Comments');

class CommentService {
    async create(body, postId, userId) {
        const comment = await Comments.create({ body, userId, postId });

        return { comment };
    }

    async delete(id) {
        const comment = await Comments.findOne({ where: { id } });
        if (!comment) {
            throw ApiError.BadRequest('Post not found');
        }
        await comment.destroy();
    }

    async list(id) {
        let comments;
        if (id) {
            comments = await Comments.findOne({ where: { id } });
            return comments;
        }
        comments = await Comments.findAll();

        return comments;
    }

}
module.exports = new CommentService();
