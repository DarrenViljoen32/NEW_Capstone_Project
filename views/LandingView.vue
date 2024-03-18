<template>
    <div class="landing">
        <h1>UNBOUND</h1>
        <h4>Social Media Platform</h4>
        <br><br><br>

        <router-link to="/signin"><button>Sign Up</button></router-link>
        <router-link to="/login"><button>Log In</button></router-link>
        
        
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<style>
button{
    margin-left: 50px;
    margin-right: 50px;
}
</style>