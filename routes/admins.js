import express from 'express'
import controller from '../controller/admins.js'

const router = express.Router();

// ADMINS

router
    .route('/')
        .get(controller.getAdmins)
        .post(controller.registerAdmin)

router
    .route('/:user_ID')
        .get(controller.getOneAdmin)
        .patch(controller.editAdmin) 
        .delete(controller.deleteAdmin) 
        

export default router