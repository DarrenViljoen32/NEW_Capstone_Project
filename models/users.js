import {pool} from '../config/config.js'

//USERS

//get all users
const getUsers = async()=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM users
    `)
    return result  
}

//get single user
const getOneUser = async(user_ID)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM users
        WHERE user_ID = ?
    `,[user_ID])
    return result
}

//add user
const addUser = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image)=>{
    // const [user] = 
    await pool.query(`
        INSERT INTO users (user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image) VALUES (?,?,?,?,?,?,?)
    `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image])
    // return getOneUser(user.insertId)
}  

//delete user
const deleteUser = async(user_ID)=>{
    const [result] = await pool.query(`
        DELETE 
        FROM users
        WHERE user_ID = ?
    `,[user_ID])
    return result
}

//edit user
const editUser = async(user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image, user_ID)=>{
    const [user] = await pool.query(`
    UPDATE users SET user_Name=?, user_Surname=?, user_Age=?, user_Gender=?, user_Email=?, user_Password=?, user_Image=? 
    WHERE (user_ID=?)
    `,[user_Name, user_Surname, user_Age, user_Gender, user_Email, user_Password, user_Image, user_ID])
    return user
} 

//check user
const  checkUser = async (user_Name) =>{
    const [[{user_Password}]] = await pool.query(`
        SELECT user_Password FROM users WHERE user_Name = ?
    `,[user_Name])
    return user_Password
}

export {getUsers, getOneUser, addUser, deleteUser, editUser, checkUser}
