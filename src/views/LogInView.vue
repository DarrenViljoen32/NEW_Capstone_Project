<template>
    <div class="view">
        <h1>Log In</h1>

        <input type="text" name="admin_Name" id="admin_Name1" placeholder="Name" v-model="admin_Name">
        <br><br>
        <input type="password" name="admin_Password" id="admin_Password1" placeholder="Password" v-model="admin_Password">'
        <br><br>

        <button @click="password()">LogIn</button>
        <br><br><br>

        <p>Dont have an account?</p>
        <router-link to="/signin"><button>Sign Up</button></router-link>
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
        password(){
            this.$store.dispatch('loginAdmin', this.$data)
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