<template>
    <div class="view">
        <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link>
        <br><br>
        <h1>Profile</h1>
        <br><br>

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

        <div v-if="loggedInAdmin">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{{ loggedInAdmin.admin_ID }}</th>
                <td>{{ loggedInAdmin.admin_Name }}</td>
                <td>{{ loggedInAdmin.admin_Email }}</td>
                <td>{{ loggedInAdmin.admin_Password }}</td>
                <td>
                  <button class="bi bi-pencil" title="Edit Admin" @click="populateAdminFields(admin)" data-bs-toggle="modal" data-bs-target="#exampleModal8"></button>
                  <br><br>
                  <button class="bi bi-dash-lg" title="Delete Admin" @click="deleteAdmin(admin.admin_ID)"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else>
          <p>No logged in Admin</p>
          <Spinner/>
        </div>

    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
export default{

    components:{
      Spinner
    },

    data(){
        return{
            admins: [],

            loadingAdmins: true,

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

            modalVisable: false,
        }
    },
    computed:{
    logout(){
      this.$store.dispatch('logout')
    },

    loggedInAdmin(){
      return this.$store.state.admins
    }
  },

  methods: {
    // async displayAdmins(){
    //   try{
    //     this.loadingAdmins = false
    //     await this.$store.dispatch('getAdmins')
    //     this.admins = this.$store.state.admins
    //   }catch(err){
    //     console.error(err);
    //   }finally{
    //     this.loadingAdmins = true
    //   }
    // },

    async displayOneAdmin(){
      try{
        this.loadingAdmins = false
        await this.$store.dispatch('getOneAdmin')
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
  },

  mounted(){
    // this.displayAdmins()
    this.displayOneAdmin()
  }
}
</script>

<style>

</style>