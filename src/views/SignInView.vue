<template>
    <div class="view">
        <h1>Sign Up</h1>
        <input type="text" name="admin_Name" id="admin_Name2" placeholder="Name" v-model="admin_Name">
        <br><br>
        <input type="text" name="admin_Email" id="admin_Email" placeholder="Email" v-model="admin_Email">
        <br><br>
        <input type="password" name="admin_Password" id="admin_Password2" placeholder="Password" v-model="admin_Password">'
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
            admin_Name: null,
            admin_Email: null,
            admin_Password: null
        }
    },

    methods:{
        plusAdmin(){
            this.$store.dispatch('addAdmin', this.$data)
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