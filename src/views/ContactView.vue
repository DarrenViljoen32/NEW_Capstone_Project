<template>
    <div class="view">
        <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link>
        <br><br>
        <h1>Contact Us</h1>
        <br><br><br><br>

        <div  v-if="loadingContent">
          <div class="row" id="left">
            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-geo-alt-fill"></i>
                    <h4>Location</h4>
                        <p>Cape Town, Western Cape, South Africa</p>
                    </li>
                </ul>
            </div>

            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-telephone-outbound-fill"></i>
                    <h4>Telephone</h4>
                    <p><a href="tel: 0748671764">+27 74 867 1764</a></p>
                    </li>
                </ul>
            </div>

            <div class="col-md-4 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="bi bi-envelope-at-fill"></i>
                    <h4>Email</h4>
                    <p>darrenviljoen32@gmail.com</p>
                    </li>
                </ul>
            </div>

          </div>
          <br><br><br>

          <h3 class="fw-bold col" id="right">Send Us a Message via Email:</h3>

          <div class="row">

          <div class="col-md mb-md-0 mb-5">
              <form @submit.prevent="submitForm" id="contact-form" name="contact-form" action="https://formspree.io/f/xjvqjgvr" method="POST" class="was-validated">

              <div class="row">

                  <div class="col-md-6">
                  <div class="md-form mb-0">
                      <input type="text" id="name" name="name" class="form-control" placeholder="Enter Full Name" required v-model="name">
                      <div class="valid-feedback">
                          Valid!
                      </div>
                      <div class="invalid-feedback">
                          Please Enter A Name.
                      </div>
                  </div>
                  </div>

                  <div class="col-md-6">
                  <div class="md-form mb-0">
                      <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email" required v-model="email">
                      <div class="valid-feedback">
                          Valid!
                      </div>
                      <div class="invalid-feedback">
                          Please Enter An Email.
                      </div>
                  </div>
                  </div>

              </div>

              <div class="row">

                  <div class="col-md-12">
                      <div class="md-form mb-0">
                      <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject" required v-model="subject">
                      <div class="valid-feedback">
                          Valid!
                      </div>
                      <div class="invalid-feedback">
                          Please Enter A Subject.
                      </div>
                      </div>
                  </div>
                  
              </div>

              <div class="row">

                  <div class="col-md-12">

                  <div class="md-form">
                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Enter Your Message" required v-model="message"></textarea>
                      <div class="valid-feedback">
                          Valid!
                      </div>
                      <div class="invalid-feedback">
                          Please Enter A Message.
                      </div>
                  </div>

                  </div>

              </div>

              <div class="text-center text-md-left">
                  <button type="submit" class="btn" data-toggle="modal" data-target="#formModal">Send</button>
              </div>
              <br><br><br>
                  <!-- Modal -->
                  <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="formModalLongTitle">Thank You!</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <p>Your Message Was Successfully Sent via Formspree.</p>
                      </div>
                      </div>
                  </div>
                  </div>

              </form>
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
export default{

    components:{
      Spinner
    },

    data(){
        return{
            loadingContent: true,
        }
    },
    computed:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>