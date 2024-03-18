import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import Swal from 'sweetalert2';

axios.defaults.withCredentials = true;

const baseUrl = 'https://new-capstone-project-z8q3.onrender.com'

export default createStore({
  state: {
    users: null,
    admins: null,
    posts: null,
    loggedin: false,
    loginMessage: null,
  },
  getters: {
  }, 
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },

    setAdmins(state, payload){
      state.admins = payload
    },

    setPosts(state, payload){
      state.posts = payload
    },

    setLogged(state, payload){
      state.loggedin = payload
    },

    setLoginMessage(state, message){
      state.loginMessage = message
    },

    setAdmin(state, adminData){
      state.admins = adminData
    }
  },
  actions: {

    //USERS

    //get all users
    async getUsers({commit}){
      try{
        let users = await axios.get(baseUrl + '/users')
        console.log(users);
        commit('setUsers', users.data)
      }catch(error){
        console.error('Error fetching users: ' , error);
        Swal.fire('Error fetching users ', error)
      }
    },

    //get one user
    async getOneUser({commit}, userDetails){
      try{
        await axios.get(baseUrl + '/users', userDetails)
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error fetching a user ', err)
      }
    },

    //delete user
    async deleteUser({commit}, user_ID){
      try{
        console.log(user_ID);
        let {data}= await axios.delete(baseUrl + '/users/' + user_ID)
        if (data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Deleted successfully.")
        }
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error deleting a user ', err)
      }
    },

    //update user
    async editUser({commit}, update){
      try{
        let {data} = await axios.patch(baseUrl + '/users/' + update.user_ID, update)
        if (data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Updated successfully.")
        }
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error updating the user ', err)
      }
    },

    //add user
    async addUser({commit}, add){

      try{
        console.log(add);
        let {data} = await axios.post(baseUrl + '/users', add)
        // alert(data.msg)
        window.location.reload()
        Swal.fire(data.msg)
      }catch(err){
        console.error('Error adding user ', err);
        Swal.fire('Error adding user ', err)
      }
    },


    //ADMINS

    //get all admins
    async getAdmins({commit}){
      try{
        let users = await axios.get(baseUrl + '/users')
        console.log(users);
        commit('setUsers', users.data)
      }catch(err){
        console.error('Error fetching admins: ' , err);
        Swal.fire('Error fetching admins ', err)
      }
    },

    //get one admin
    async getOneAdmin({commit}, userDetails){
      try{
        await axios.get(baseUrl + '/users', userDetails)
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error fetching one admin ', err)
      }
    },

    //delete admin
    async deleteAdmin({commit}, user_ID){
      try{
        console.log(user_ID);
        let {data} = await axios.delete(baseUrl + '/users/' + user_ID)
        if(data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Successfully Deleted Account.")
        }
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error deleting admin ', err)
      }
    },

    //update admin
    async editAdmins({commit}, update){
      try{
        let {data} = await axios.patch(baseUrl + '/users/' + update.user_ID, update)
        if(data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Successfully Updated Account.")
        }
        window.location.reload()
      }catch(err){
        console.error(err);
        Swal.fire('Error updating admin ', err)
      }
    },

    //add admin
    async addAdmin({commit}, add){
      
      try{
        console.log(add);
        let {data} = await axios.post(baseUrl + '/users' , add)
        // alert(data.msg)
        // window.location.reload()
        Swal.fire(data.msg)
      }catch (err){
        console.error('Error adding admin ', err);
        Swal.fire('Error adding admin ', err)
      }
    },

    //login as admin
    async loginAdmin({commit}, user_Password){
        console.log(user_Password);
        let {data} = await axios.post(baseUrl + '/login', user_Password)

        const userDetails = data.users
        commit('setUsers', userDetails)
  
        $cookies.set('jwt', data.token)
        commit('setLoginMessage', data.msg)
        
        // alert(data.msg)
        Swal.fire(data.msg)
        await router.push('/home')


      //commit('setLogged', true)
      // window.location.reload()
    },

    //logout
    async logout(){
      let cookies = $cookies.keys()
      console.log(cookies);

      $cookies.remove('jwt')
      // window.location.reload()
    },


    //POSTS

    //get all posts
    async getPosts({commit}){
      try{
        let posts = await axios.get(baseUrl + '/posts')
        console.log(posts);
        commit('setPosts', posts.data)
      }catch(error){
        console.error('Error fetching users ', error);
        Swal.fire('Error fetching users ', error)
      }
    },

    //get one post
    async getOnePost({commit}, postDetails){
      try{
        await axios.get(baseUrl + '/posts/', postDetails)
        window.location.reload()
      }catch(err){
        console.error('Error fetching a user ', err);
        Swal.fire('Error fetching a user ', err)
      }
    },

    //delete post
    async deletePost({commit}, post_ID){
      try{
        console.log(post_ID);
        let {data} = await axios.delete(baseUrl + '/posts/' + post_ID) 
        if(data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Successfully Deleted Post.")
        }
        window.location.reload()
      }catch(err){
        console.error('Error deleting post ', err);
        Swal.fire('Error deleting post ', err)
      }
    },

    //update post
    async editPost({commit}, update){
      try{
        let {data} = await axios.patch(baseUrl + '/posts/' + update.post_ID, update)
        if(data.msg){
          Swal.fire(data.msg)          
        }else{
          Swal.fire("Successfully Updated Post.")
        }
        window.location.reload()
      }catch(err){
        console.error('Error updating post ', err);
        Swal.fire('Error updating post ', err)
      }
    },

    //add post
    async addPost({commit}, add){
      try{
        console.log(add);
        let {data} = await axios.post(baseUrl + '/posts', add)
        if(data.msg){
          Swal.fire(data.msg)
        }else{
          Swal.fire("Successfully Added a Post.")
        }
        window.location.reload()
      }catch(err){
        console.error('Error adding post ', err);
        Swal.fire('Error adding post ', err)
      }
    }
  },

  modules: {
  }
})
