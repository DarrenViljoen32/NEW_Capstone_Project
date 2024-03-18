<template>
  <div class="home">
    <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link>
    <br><br>
    <h1>Home</h1>
    <br><hr><br><br>
    
    <div v-if="loadingPosts">

      <div class="row">
        <div class="col-lg-3" id="divider">

          <h3 id="sortfilter">Make A Post</h3>
          <br>
          <form >
            <textarea type="text" name="post_Content" id="postInput" class="form-control" placeholder="Type your post here!" v-model="post_Content"></textarea>
            <br>
            <button type="button" @click="addPost">Post</button>
          </form>
          <br><br><br>

          <h3 id="sortfilter">Sort & Filter</h3>
          <br>

          <form>
            <input type="text" id="filterUsers" class="form-control" placeholder="Filter By Name">
            <br>
          </form>
            <!-- <button>Search <span class="bi bi-search"></span></button>
            <br><br> -->
            <button>Sort By Date <span class="bi bi-filter"></span></button>
            <br><br>
            <button>Sort By Name <span class="bi bi-filter"></span></button>
            <br><br>

        </div>
        <div class="col-lg-9">
          <h3>Posts</h3>
          <br><br>

          <!-- v-for here -->
          <div >

            <div class="row">
              <div class="col-lg-12" id="postBlock" v-for="post in posts" :key="post.post_ID">
                <h5 id="postDetails">{{getUsername(post.user_ID)}} {{ getUsersurname(post.user_ID) }}</h5>
                <p id="postEmail">{{ getUserEmail(post.user_ID) }}</p>
                <div class="postContent">
                  <p>{{ post.post_Content }}</p>
                  <p id="postDetails">{{ post.post_Date }}</p>
                  <hr><br>
                </div>
              </div>
            </div>

          </div>

          
        </div>

      </div>

    </div>

    <div v-else>
      <Spinner/>
    </div>

  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
export default {
  components: {
    Spinner
  },

  data(){
    return{
      posts: [],
      users: [],

      loadingPosts : true,
      loadingUsers : true,

      post_ID: null,
      post_Title: null,
      post_Content: null,
      post_Date: null,
      user_ID: null,

      editedPosts:  {
        post_ID: null,
        post_Title: null,
        post_Content: null,
        post_Date: null,
        user_ID: null,
      },

      user_Name: null,
      user_Surname: null,
      user_Email: null,

      searchQuery: '',
      sortBy: '',
      sortOrder: '',

      modalVisable: false
    }
  },

  methods:{
    logout(){
      this.$store.dispatch('logout')
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
        const postContent = this.post_Content.trim()
        if(postContent){
          this.$store.dispatch('addPost', {post_Content: postContent})
            .then(() => {
              this.post_Content = ''
            })
            .catch(error => {
              console.error('Error adding post:', error);
            })
        }else{
          console.error('Post Content cannot be empty.');
        }
      }catch(err){
        console.error('Error adding post:', err);
      }
    },

    populatePostFields(posts){
      this.post_Title = posts.post_Title
      this.post_Content = posts.post_Content
      this.post_Date = posts.post_Date
      this.editedPosts = {...posts}
    },

    clearPostInput(){
      this.post_Title = ''
      this.post_Content = ''
      this.post_Date = ''
    },

    postEdit(){
      try{
        this.$store.dispatch('editPost', this.editedPosts);
        this.editedPosts = {
          post_ID: null,
          post_Title: null,
          post_Content: null,
          post_Date: null,
          user_ID: null
        }
      }catch(err){
        console.error(err);
      }
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

    getUsername(userid){
      const user = this.users.find(user => user.user_ID === userid)
      return user ? user.user_Name: 'Unknown'
    },

    getUsersurname(userid){
      const user = this.users.find(user => user.user_ID === userid)
      return user ? user.user_Surname: 'Unknown'
    },

    getUserEmail(userid){
      const user = this.users.find(user => user.user_ID === userid)
      return user ? user.user_Email: 'Unknown'
    },

  },

  mounted(){
    this.displayPosts()
    this.displayUsers()
    // this.getUsername()
  }
}
</script>

<style scoped>
*{
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar{
  display: none;
}
h1{
  text-align: left;
  margin-left: 5px;
}
h3{
  text-align: center;
}
#sortfilter{
  color: white;
}
#divider{
  border-right: 3px solid;
  background-color: #6400C7;
}
#filterUsers{
  margin-right: 10px;
  margin-left: 50px;
  width: 75%;
}
#postInput{
  margin-right: 10px;
  margin-left: 50px;
  width: 70%;
  height: 200px;

}
#postBlock{
  text-align: left;
}
#postDetails{
  font-weight: bold;
}
#postEmail{
  font-style: italic;
}
</style>