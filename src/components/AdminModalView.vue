<template>
    <div class="add">
      
        <!-- Add Users Modal -->
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Users</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="user_Name" id="user_Name" placeholder="First Name" v-model="user_Name">
                <br><br>
                <input type="text" name="user_Surname" id="user_Surname" placeholder="Surname" v-model="user_Surname">
                <br><br>
                <input type="text" name="user_Age" id="user_Age" placeholder="Age" v-model="user_Age">
                <br><br>
                <input type="text" name="user_Gender" id="user_Gender" placeholder="Gender" v-model="user_Gender">
                <br><br>
                <input type="email" name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email">
                <br><br>
                <input type="password" name="user_Password" id="user_Password" placeholder="Password" v-model="user_Password">
                <br><br>
                <input type="text" name="user_Image" id="user_Image" placeholder="Image Url" v-model="user_Image">
                <br><br>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addUser">Add</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user_ID: null,
            user_Name: null,
            user_Surname: null,
            user_Age: null,
            user_Gender: null,
            user_Email: null,
            user_Password: null,
            user_Image: null
        }
    },

    methods:{
      addUser(){
        this.$store.dispatch('addUser', this.$data)
      },

    }
}
</script>
<style>

</style>