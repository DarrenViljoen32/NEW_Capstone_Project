<template>
    <div class="view">
        <h1>Sign Up</h1>
        <input type="text" name="user_Name" id="user_Name2" placeholder="Name" v-model="user_Name">
        <br><br>
        <input type="text" name="user_Surname" id="user_Surname2" placeholder="Surname" v-model="user_Surname">
        <br><br>
        <input type="text" name="user_Age" id="user_Age2" placeholder="Age" v-model="user_Age">
        <br><br>
        <input type="text" name="user_Gender" id="user_Gender" placeholder="Gender" v-model="user_Gender">
        <br><br>
        <input type="text" name="user_Email" id="user_Email" placeholder="Email" v-model="user_Email">
        <br><br>
        <input type="password" name="user_Password" id="user_Password2" placeholder="Password" v-model="user_Password">'
        <br><br>
        <input type="text" name="user_Image" id="user_Image" placeholder="Image Url" v-model="user_Image">
        <br><br>
        <input type="text" name="user_Role" id="user_Role" placeholder="Role" v-model="user_Role">
        <br><br>
        
        <router-link to="/login"><button @click="plusAdmin()">Register</button></router-link>
        
        <br><br><br>

        <p>Already have an account?</p>
        <router-link to="/login"><button>Log In</button></router-link>
    </div>
</template> 

<script>
export default{
    data() {
        return{
            user_Name: null,
            user_Surname: null,
            user_Age: null,
            user_Gender: null,
            user_Email: null,
            user_Password: null,
            user_Image: null,
            user_Role: null
        }
    },

    methods:{
        plusAdmin(){
            this.$store.dispatch('addUser', this.$data)
        }
    },

    computed:{

    }
}
</script>

<style>
button{
    margin: 5px;
}
</style>