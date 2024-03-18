<template>
    <div class="view">
        <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link>
        <br><br>
        <h1>Administration</h1>
        <br><br>
          
          
          
          <!-- Add Users Modal -->
          <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Users</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="user_Name" placeholder="First Name" v-model="user_Name">
                  <br><br>
                  <input type="text" name="user_Surname" placeholder="Surname" v-model="user_Surname">
                  <br><br>
                  <input type="text" name="user_Age" placeholder="Age" v-model="user_Age">
                  <br><br>
                  <input type="text" name="user_Gender" placeholder="Gender" v-model="user_Gender">
                  <br><br>
                  <input type="email" name="user_Email" placeholder="Email" v-model="user_Email">
                  <br><br>
                  <input type="password" name="user_Password" placeholder="Password" v-model="user_Password">
                  <br><br>
                  <input type="text" name="user_Image" placeholder="Image Url" v-model="user_Image">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button type="button" @click="addUser">Add</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Edit Users Modal -->
          <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="user in $store.state.users" :key="user.user_ID">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="user_Name" placeholder="First Name" v-model="editedUsers.user_Name">
                  <br><br>
                  <input type="text" name="user_Surname" placeholder="Surname" v-model="editedUsers.user_Surname">
                  <br><br>
                  <input type="text" name="user_Age" placeholder="Age" v-model="editedUsers.user_Age">
                  <br><br>
                  <input type="text" name="user_Gender" placeholder="Gender" v-model="editedUsers.user_Gender">
                  <br><br>
                  <input type="email" name="user_Email" placeholder="Email" v-model="editedUsers.user_Email">
                  <br><br>
                  <input type="password" name="user_Password" placeholder="Password" v-model="editedUsers.user_Password">
                  <br><br>
                  <input type="text" name="user_Image" placeholder="Image Url" v-model="editedUsers.user_Image">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button @click="userEdit">Save</button>
                </div>
              </div>
            </div>
          </div>
          
        

          <!-- Add Admin Modal -->
          <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Admin</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="admin_Name" placeholder="Full Name" v-model="admin_Name">
                  <br><br>
                  <input type="email" name="admin_Email" placeholder="Email" v-model="admin_Email">
                  <br><br>
                  <input type="password" name="admin_Password" placeholder="Password" v-model="admin_Password">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button type="button" @click="addAdmin">Add</button>
                </div>
              </div>
            </div>
          </div>


          <!-- Edit Admin Modal -->
          <div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="admin in $store.state.admins" :key="admin.admin_ID">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit Admin</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="admin_Name" placeholder="Full Name" v-model="editedAdmins.admin_Name">
                  <br><br>
                  <input type="email" name="admin_Email" placeholder="Email" v-model="editedAdmins.admin_Email">
                  <br><br>
                  <input type="password" name="admin_Password" placeholder="Password" v-model="editedAdmins.admin_Password">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button @click="adminEdit">Save</button>
                </div>
              </div>
            </div>
          </div>


          <!-- Add Post Modal -->
          <div class="modal fade" id="exampleModal00" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Post</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="post_Title" placeholder="Post Title" v-model="post_Title">
                  <br><br>
                  <input type="text" name="post_Content" placeholder="Post Content" v-model="post_Content">
                  <br><br>
                  <input type="text" name="user_ID" placeholder="userID" v-model="user_ID">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button type="button" @click="addPost">Add</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Edit Post Modal -->
          <div class="modal fade" id="exampleModal01" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="post in $store.state.posts" :key="post.post_ID">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                  <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
                </div>
                <div class="modal-body">
                  <input type="text" name="post_Title2" placeholder="Post Title" v-model="editedPosts.post_Title">
                  <br><br>
                  <input type="text" name="post_Content" placeholder="Post Content" v-model="editedPosts.post_Content">
                  <br><br>
                  <input type="text" name="user_ID" placeholder="userID" v-model="editedPosts.user_ID">
                  <br><br>
                </div>
                <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button @click="postEdit">Save</button>
                </div>
              </div>
            </div>
          </div>
          
      


          <!-- USERS -->
        <!-- <div v-if="loadingUsers">

          <div class="row">
            <div class="col-lg-6" id="subTitle">
              <h2>Users</h2>
            </div>

            <div class="col-lg-6" id="crudIcons">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal3" class="bi bi-plus-lg" title="Add User" @click="clearInput"></button>Add User
            </div>
          </div>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Password</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.user_ID">
                <th>{{ user.user_ID }}</th>
                <td>{{ user.user_Name }}</td>
                <td>{{ user.user_Surname }}</td>
                <td>{{ user.user_Age }}</td>
                <td>{{ user.user_Gender }}</td>
                <td>{{ user.user_Email }}</td>
                <td>{{ user.user_Password }}</td>
                <td><img v-bind:src= "user.user_Image" alt="Profile Photo" class="img-fluid"></td>
                <td>
                  <button class="bi bi-pencil" title="Edit User" @click="populateUserFields(user)" data-bs-toggle="modal" data-bs-target="#exampleModal4"></button>
                </td>
                <td>
                  <button class="bi bi-dash-lg" title="Delete User" @click="deleteUser(user.user_ID)"></button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div v-else>
          <Spinner/>
        </div> -->

        
        <!-- ADMINS -->
        <div v-if="loadingAdmins">
          <div class="row">

            <div class="col-lg-6" id="subTitle">
              <h2>Users</h2>
            </div>

            <div class="col-lg-6" id="crudIcons">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal6" class="bi bi-plus-lg" title="Add Admin" @click="clearAdminInput"></button>Add User
            </div>

          </div>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in admins" :key="admin.admin_ID">
                <th>{{ admin.admin_ID }}</th>
                <td>{{ admin.admin_Name }}</td>
                <td>{{ admin.admin_Email }}</td>
                <td>{{ admin.admin_Password }}</td>
                <td>
                  <button class="bi bi-pencil" title="Edit Admin" @click="populateAdminFields(admin)" data-bs-toggle="modal" data-bs-target="#exampleModal8"></button>
                </td>
                <td>
                <button class="bi bi-dash-lg" title="Delete Admin" @click="deleteAdmin(admin.admin_ID)"></button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div v-else>
          <Spinner/>
        </div>


        <!-- POSTS -->
        <div v-if="loadingPosts">
          <div class="row">

            <div class="col-lg-6" id="subTitle">
              <h2>Posts</h2>
            </div>

            <div class="col-lg-6" id="crudIcons">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal00" class="bi bi-plus-lg" title="Add Post" @click="clearPostInput"></button>Add Post
            </div>

          </div>

          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
                <!-- <th>User ID</th> -->
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.post_ID">
                <th>{{ post.post_ID }}</th>
                <td>{{ post.post_Title }}</td>
                <td>{{ post.post_Content }}</td>
                <!-- <td>{{ post.user_ID }}</td> -->
                <td>
                  <button class="bi bi-pencil" title="Edit Post" @click="populatePostFields(post)" data-bs-toggle="modal" data-bs-target="#exampleModal01"></button>
                </td>
                <td>
                  <button class="bi bi-dash-lg" title="Delete Post" @click="deletePost(post.post_ID)"></button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div v-else>
          <Spinner/>
        </div>



    </div>
</template>

<script>
  import AdminModalView from '@/components/AdminModalView.vue'
  import Spinner from '@/components/Spinner.vue'

export default{
  components:{
    AdminModalView,
    Spinner,
  },

    data(){
        return{
            users: [],
            admins: [],
            posts: [],

            loadingUsers: true,
            loadingAdmins: true,
            loadingPosts: true,
            
            user_ID: null,
            user_Name: null,
            user_Surname: null,
            user_Age: null,
            user_Gender: null,
            user_Email: null,
            user_Password: null,
            user_Image: null,
            
            editedUsers: {
              user_ID: null,
              user_Name: null,
              user_Surname: null,
              user_Age: null,
              user_Gender: null,
              user_Email: null,
              user_Password: null,
              user_Image: null,
            },

            admin_ID: null,
            admin_Name: null,
            admin_Email: null,
            admin_Password: null,

            editedAdmins: {
              admin_ID: null,
              admin_Name: null,
              admin_Email: null,
              admin_Password: null,
            },

            post_ID: null,
            post_Title: null,
            post_Content: null,

            editedPosts: {
              post_ID: null,
              post_Title: null,
              post_Content: null,
              user_ID: null
            },

            modalVisable: false,
        }
    },


    methods:{
      logout(){
        this.$store.dispatch('logout')
      },
  
      //USERS

      async displayUsers(){
        try{
          this.loadingUsers = false
          await this.$store.dispatch('getUsers')
          this.users = this.$store.state.users
        }catch(err){
          console.error(err);
        }finally{
          this.loadingUsers = true
        }
      },

      deleteUser(user_ID){
        try{
          this.$store.dispatch('deleteUser', user_ID)
        }catch(err){
          console.error(err);
        }
      },

      addUser(){
        try{
          this.$store.dispatch('addUser', this.$data)
        }catch(err){
          console.error(err);
        }
      },

      populateUserFields(user){
        this.user_Name = user.user_Name
        this.user_Surname = user.user_Surname
        this.user_Age = user.user_Age
        this.user_Gender = user.user_Gender
        this.user_Email = user.user_Email
        this.user_Password = user.user_Password
        this.user_Image = user.user_Image
        this.editedUsers = {...user}
      },

      clearInput(){
        this.user_Name = ''
        this.user_Surname = ''
        this.user_Age = ''
        this.user_Gender = ''
        this.user_Email = ''
        this.user_Password = ''
        this.user_Image = ''
      },
 
      userEdit(){
        try{
          this.$store.dispatch('editUser', this.editedUsers);
          this.editedUsers = {
                user_ID: null,
                user_Name: null,
                user_Surname: null,
                user_Age: null,
                user_Gender: null,
                user_Email: null,
                user_Password: null,
                user_Image: null,
          }
        }catch(err){
          console.error(err);
        }
    },


    //ADMINS

    async displayAdmins(){
      try{
        this.loadingAdmins = false
        await this.$store.dispatch('getAdmins')
        this.admins = this.$store.state.admins
      }catch(err){
        console.error(err);
      }finally{
        this.loadingAdmins = true
      }
    },

    deleteAdmin(admin_ID){
      try{
        this.$store.dispatch('deleteAdmin', admin_ID)
      }catch(err){
        console.error(err);
      }
    },

    addAdmin(){
      try{
        this.$store.dispatch('addAdmin', this.$data)
        window.location.reload()
      }catch(err){
        console.error(err);
      }
    },

    populateAdminFields(admin){
      this.admin_Name = admin.admin_Name
      this.admin_Email = admin.admin_Email
      this.admin_Password = admin.admin_Password
      this.editedAdmins = {...admin}
    },

    clearAdminInput(){
      this.admin_Name = ''
      this.admin_Email = ''
      this.admin_Password = ''
    },

    adminEdit(){
      try{
        this.$store.dispatch('editAdmins', this.editedAdmins)
        this.editedAdmins = {
          admin_Name : null,
          admin_Email : null,
          admin_Password : null
        }
      }catch(err){
        console.error(err);
      }
    },

    //POSTS
  
    async displayPosts(){
      try{
        this.loadingPosts = false
        await this.$store.dispatch('getPosts')
        this.posts = this.$store.state.posts
      }catch(err){
        console.error(err);
      }finally{
        this.loadingPosts = true
      }
    },

    deletePost(post_ID){
      try{
        this.$store.dispatch('deletePost', post_ID)
      }catch(err){
        console.error(err);
      }
    },

    addPost(){
      try{
        this.$store.dispatch('addPost', this.$data)
      }catch(err){
        console.error(err);
      }
    },

    populatePostFields(post){
      this.post_Title = post.post_Title
      this.post_Content = post.post_Content
      this.user_ID = post.user_ID,
      this.editedPosts = {...post}
    },

    clearPostInput(){
      this.post_Title = ''
      this.post_Content = ''
      this.user_ID = ''
    },

    postEdit(){
      try{
        this.$store.dispatch('editPost', this.editedPosts)
        this.editedPosts = {
          post_Title : null,
          post_Content : null,
          user_ID: null      
        }
      }catch(err){
        console.error(err);
      }
    },

  },

    
  computed:{

  },

  mounted(){
    this.displayUsers()
    this.displayAdmins()
    this.displayPosts()
  }
}
</script>

<style scoped>
/* hide scrollbar */
*{
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar{
  display: none;
}

#subTitle{
  text-align: left;
  margin-left: 25px;
}
#crudIcons{
  text-align: right;
}

button{
  margin-left: 5px;
  margin-right: 2px;
}

table{
  table-layout: fixed;
}

td{
  word-wrap: break-word;
}
</style>