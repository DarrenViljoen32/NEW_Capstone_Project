import express from 'express'
import controller from '../controller/users.js'


const router = express.Router();

//USERS

router
    .route('/')
        .get(controller.getUsers)
        .post(controller.addUser)

router
    .route('/:user_ID')
        .get(controller.getOneUser)
        .patch(controller.editUser) 
        .delete(controller.deleteUser) 
        
// router
//     .route('/:user_Name')

// router
//  .route('/users')
//      .post(controller.addUser)

        

export default router