import bcrypt from 'bcrypt'
import {getUsers, getOneUser, addUser, deleteUser, editUser} from '../models/users.js'



export default{
    getUsers: async (req,res)=>{
        try{
            res.send(await getUsers())
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    getOneUser: async (req,res)=>{
        try{
            res.send(await getOneUser(+req.params.user_ID))
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    addUser: async (req,res)=>{
        const {user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image} = req.body
        bcrypt.hash(user_Password, 10, async (err,hash)=>{
            if(err) throw err
            await addUser(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image, hash)
            // const users = await getUsers()
            // res.send(await getUsers())
            res.send({
                // users: users,
                msg: "You have successfully created an account."
            }) 

        })
        
    },

    
    deleteUser: async (req,res)=>{
        await deleteUser(req.params.user_ID)
        console.log(req.params.user_ID);

        try{
            res.send(await deleteUser(req.params.user_ID))
        }catch(err){
            console.error(err);
            res.json({
                msg: 'An error has occurred when retrieving the data.'
            })
        }
    },

    editUser: async (req,res)=>{
        const [user] = await getOneUser(+req.params.user_ID)
        let {user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image} = req.body
        
        user_Name ? user_Name = user_Name: {user_Name} = user
        user_Surname ? user_Surname = user_Surname: {user_Surname} = user
        user_Age ? user_Age = user_Age: {user_Age} = user
        user_Gender ? user_Gender = user_Gender: {user_Gender} = user
        user_Email ? user_Email = user_Email: {user_Email} = user
        user_Password ? user_Password = user_Password: {user_Password} = user
        user_Image ? user_Image = user_Image: {user_Image} = user

        console.log(user);
        await editUser(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image,+req.params.user_ID) 
        res.json(await getUsers())
    }
    
}
