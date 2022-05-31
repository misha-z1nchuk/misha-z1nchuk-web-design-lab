const ApiError = require('../ErrorHandler');
const Posts = require('../../../models/Posts');
const Users = require('../../../models/Users');

class PostService {
    async create(title, body, userId) {
        const post = await Posts.create({ title, body, userId });
        return { post };
    }

    async delete(id, userId) {
        const post = await Posts.findOne({ where: { id } });
        if (!post) {
            throw ApiError.BadRequest('Post not found');
        }
        if (post.userId !== userId) {
            throw ApiError.BadRequest('You can only delete your post');
        }
        await post.destroy();
    }

    async list(id) {
        let posts;
        if (id) {
            posts = await Posts.findOne({ where: { id } });
            return posts;
        }
        posts = await Posts.findAll();

        await Promise.all(posts.map(async post => {
            const user = await Users.findOne({ where: { id: post.userId } });

            post.setDataValue('user',  { firstName: user.firstName, lastName: user.lastName });
        }));

        return posts;
    }

}
module.exports = new PostService();
