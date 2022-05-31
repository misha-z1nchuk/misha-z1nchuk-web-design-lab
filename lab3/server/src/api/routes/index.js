const express = require('express');

const router = new express.Router();

const postRouter = require('./postRouter');
const userRouter = require('./userRouter');
const commentRouter = require('./commentRouter');


router.use(postRouter);
router.use('/users', userRouter);
router.use(commentRouter);

module.exports = router;
