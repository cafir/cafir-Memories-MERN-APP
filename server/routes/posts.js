import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';

const router = express.Router();

//read
router.get('/', getPosts);
//create
router.post('/', createPost);
//update
router.patch('/:id', updatePost);
//delete
router.delete('/:id', deletePost)
//like
router.patch('/:id/likePost', likePost);


export default router;