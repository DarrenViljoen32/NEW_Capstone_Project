<template>
    <div class="view">
        <h1>Log In</h1>

        <!-- <input type="text" name="user_Name" id="user_Name1" placeholder="Name" v-model="user_Name">
        <br><br> -->
        <input type="text" name="user_Email" id="user_Email1" placeholder="Email" v-model="user_Email">
        <br><br>
        <input type="password" name="user_Password" id="user_Password1" placeholder="Password" v-model="user_Password">'
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
            // user_Name: null,
            user_Email: '',
            user_Password: ''
        }
    },

    methods:{
        async password(){
            await this.$store.dispatch('loginAdmin', {
                user_Email: this.user_Email,
                user_Password: this.user_Password
            })
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