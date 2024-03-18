import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import userRouter from './routes/users.js'
import adminRouter from './routes/admins.js'
import postRouter from './routes/posts.js'

// import { registerAdmin, checkAdmin } from './models/database.js'
import {auth} from './middleware/admin.js'
// import {authorize} from './middleware/users.js'

config();
 
const PORT = process.env.PORT
    
const app = express();
    
app.use(cors(
    {
    origin: 'http://localhost:8080',
    credentials: true
    }
)); 

app.use(express.json());
app.use(cookieParser())

// app.use(express.static('../frontend/src/views/FriendsView.vue'))
app.use(express.static('../frontend/src/views/LogInView.vue'))
 

app.use('/users', userRouter)
app.use('/admins', adminRouter)
app.use('/posts', postRouter)

// app.post('/admins', (req,res)=>{
//     const {admin_Name, admin_Email, admin_Password} = req.body
//     bcrypt.hash(admin_Password, 10, async (err, hash)=>{
//         if(err) throw err
//             await registerAdmin(admin_Name, admin_Email, hash)
//             res.send({
//                 msg: "You have succeffully created and Admin Account."
//             })
//     })
// })

// const auth = async (req, res, next) => {
//     const {admin_Name, admin_Password} = req.body
//     const hashedPassword = await checkAdmin(admin_Name)
//     bcrypt.compare(admin_Password, hashedPassword, (err, result)=> {
//         if(err) throw err
//         if(result === true){
//             const {admin_Name} = req.body
//             const token = jwt.sign(
//                 {admin_Name:admin_Name},
//                 process.env.SECRET_KEY,
//                 {expiresIn: '8h'}
//             )
 
//             res.send({
//                 token: token,
//                 msg: 'You have successfully logged in!'
//             })
//             next()
//         }else{
//             res.send({
//                 msg: 'The credetials are incorrect.'
//             })
//         }
//     }) 
// } 

// app.post('/users', authorize, (req,res)=>{
// })

app.post('/login', auth, (req,res)=>{
})

 
app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})
  