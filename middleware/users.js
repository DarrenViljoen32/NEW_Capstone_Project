import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { checkUser } from '../models/users.js'


const authorize = async (req, res, next) => {
    const {user_Name, user_Password} = req.body
    const hashedPassword = await checkUser(user_Name)
    bcrypt.compare(user_Password, hashedPassword, (err, result)=> {
        if(err) throw err
        if(result === true){
            const {user_Name} = req.body
            const token = jwt.sign(
                {user_Name:user_Name},
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