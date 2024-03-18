import express from 'express'
import controller from '../controller/posts.js'

const router = express.Router();

// POSTS

router
    .route('/')
        .get(controller.getPosts)
        .post(controller.addPost)

router
    .route('/:post_ID')
        .get(controller.getOnePost)
        .patch(controller.editPost) 
        .delete(controller.deletePost) 
        

export default router