import {pool} from '../config/config.js'

//POSTS

//get all posts
const getPosts = async()=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM posts
    `)
    return result  
}

//get single post
const getOnePost = async(post_ID)=>{
    const [result] = await pool.query(`
        SELECT * 
        FROM posts
        WHERE post_ID = ?
    `,[post_ID])
    return result
}

//add post
const addPost = async(post_Title, post_Content, post_Date, user_ID)=>{
    const [post] = await pool.query(`
        INSERT INTO posts (post_Title, post_Content, post_Date, user_ID) VALUES (?,?,?,?)`,[post_Title, post_Content, post_Date, user_ID])
    return getOnePost(post.insertId)
}

//delete post
const deletePost = async(post_ID)=>{
    const [result] = await pool.query(`
        DELETE 
        FROM posts
        WHERE post_ID = ?
    `,[post_ID])
    return result
}

//edit post
const editPost = async(post_Title, post_Content, post_Date, user_ID, post_ID)=>{
    const [post] = await pool.query(`
    UPDATE posts SET post_Title=?, post_Content=?, post_Date=?, user_ID=?
    WHERE (post_ID=?)
    `,[post_Title, post_Content, post_Date, user_ID, post_ID])
    return post
} 

export {getPosts, getOnePost, addPost, deletePost, editPost}
