const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/check-auth-midlleware');
const commentController = require('../controllers/CommentController');

router.post('/comments/:postId', [authMiddleware], commentController.create);

router.delete('/comments:id', [authMiddleware], commentController.delete);
router.get('/comments', [authMiddleware], commentController.list);

module.exports = router;
