const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/check-auth-midlleware');
const postController = require('../controllers/PostController');
const { validatePosts } = require('./validation');

router.post('/posts', [validatePosts], authMiddleware, postController.create);


router.delete('/posts/:id', [authMiddleware], postController.delete);
router.get('/posts', [authMiddleware], postController.list);

module.exports = router;
