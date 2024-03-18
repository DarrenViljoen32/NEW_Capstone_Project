import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { checkUser } from '../models/users.js'
// import { checkAdmin } from '../models/database.js'


const authorize = async (req, res, next) => {
    const {user_Email, user_Password} = req.body
    const hashedPassword = await checkUser(user_Email)
    bcrypt.compare(user_Password, hashedPassword, (err, result)=> {
        if(err) throw err
        if(result === true){
            const {user_Email} = req.body
            const token = jwt.sign(
                {user_Email:user_Email},
                process.env.SECRET_KEY,
                {expiresIn: '8h'}
            ) 
  
            res.send({
                token: token,
                msg: 'You have successfully made a user account!'
            })
            next()
        }else{
            res.send({
                msg: 'The credetials are incorrect.'
            })
        }
    })
} 
  
export {authorize}