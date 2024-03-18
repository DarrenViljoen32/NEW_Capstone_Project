<template>
  <div class="about">
    <router-link to="/"><button v-if="$cookies.get('jwt')" @click="logout">Log Out</button></router-link>
    <br><br>
    <h1>About</h1>

    <div v-if="loadingContent">
      
      <div class="row">
        <div class="col-lg-6">
          <br><br>
          <h3>Who are We?</h3>
          <p>UNBOUND isn't just another coffee shop; it's an immersive experience designed to cater to the discerning tastes of urbanites seeking a blend of elegance and comfort. As you step through its inviting doors, you're greeted by the rich aroma of freshly brewed coffee beans and the warm glow of Edison bulbs casting a soft light over the modern, minimalist decor.</p>
          <br>
          <p>The café boasts a carefully curated menu that emphasizes quality and creativity. Baristas expertly craft each cup of coffee, showcasing a range of brewing methods from pour-over to cold brew, sourced from single-origin beans carefully selected for their flavor profiles. Patrons can also indulge in a selection of specialty teas and freshly squeezed juices for those seeking alternative beverages.</p>
          <br>
          <!-- <p>But UNBOUND isn't just about drinks. The menu features a mouthwatering array of pastries, baked goods, and light bites, all made in-house with the finest ingredients. From flaky croissants to decadent cakes, there's something to satisfy every craving.</p>
          <br> -->
          <!-- <p>What sets UNBOUND apart is its commitment to fostering a sense of community. The space is designed to encourage socializing and connection, with cozy seating areas perfect for catching up with friends or getting lost in a good book. Regular events such as live music nights, poetry readings, and art exhibitions further enrich the café's vibrant atmosphere, ensuring there's always something new to discover.</p>
          <br> -->
          <p>Whether you're seeking a quiet spot to work, a casual meeting place, or simply a place to unwind and recharge, UNBOUND offers a haven where every visit feels like a luxurious treat for the senses. It's more than just a café; it's a destination where the art of coffee meets the art of living.</p>
 
        </div>
        <div class="col-lg-6">
          <br><br><br>
          <img src="https://i.postimg.cc/brxJbXsG/f0fc08ff-113e-475b-a230-92ce946b8d88.jpg" alt="about1">
        </div>
      </div>
      <br><hr><br>
      <div class="row">
        <div class="col-lg-6">
          <br><br><br>
          <img src="https://i.postimg.cc/85CV12Vd/c19ff7fd-d3c2-4bc0-91d8-e0eb35bcded1.jpg" alt="about2">
          <br><br>
        </div>
        <div class="col-lg-6">
          <br><br>
          <h3>Our Purpose</h3>
          <p>The purpose of UNBOUND is to provide more than just a place to grab a cup of coffee; it aims to create a vibrant and welcoming community hub where people can gather, connect, and indulge in high-quality coffee and food offerings. The café strives to elevate the traditional café experience by offering a blend of elegance and comfort, fostering an environment where patrons feel inspired to linger, socialize, work, or simply unwind. Through its carefully curated menu, cozy ambiance, and regular events, UNBOUND seeks to enrich the lives of its customers by providing a space where they can relax, recharge, and enjoy the finer things in life.</p>
          <br><br><br>
        </div>
      </div>
      <br><hr><br>
      <div class="row">
        <div class="col-lg-6">
          <br><br>
          <h3>The Founders</h3>
          <p>
            Darren Viljoen and Jason September, two longtime friends with a shared passion for coffee and community, embarked on a journey to bring their vision of UNBOUND to life. Their story begins with a serendipitous encounter during their college years, where they bonded over late-night study sessions fueled by endless cups of coffee. It was during these moments of camaraderie that they realized the transformative power of a good cup of coffee and the importance of creating spaces where people could come together.
            <br><br>
            After years of working in various roles within the coffee industry, Darren and Jason decided to combine their expertise and entrepreneurial spirit to pursue their dream of opening a café. Armed with a shared vision of creating a space that would not only serve exceptional coffee but also foster a sense of community and connection, they began laying the groundwork for UNBOUND.
            <br><br>
            <!-- The journey was not without its challenges. From securing funding and scouting the perfect location to navigating the complexities of permits and regulations, Darren and Jason faced numerous obstacles along the way. However, their unwavering determination and shared belief in their vision propelled them forward, and after months of meticulous planning and hard work, UNBOUND finally opened its doors to the public.
            <br><br>
            From the moment they opened, Darren and Jason poured their hearts and souls into every aspect of the café, from the meticulously curated menu to the warm and inviting atmosphere. Their dedication to quality and customer experience quickly paid off, as UNBOUND became a beloved fixture in the community, attracting coffee enthusiasts and food lovers alike.
            <br><br> -->
            Today, Darren and Jason continue to be the driving force behind UNBOUND, constantly striving to innovate and evolve while staying true to their original vision. Their journey serves as an inspiration to aspiring entrepreneurs everywhere, proving that with passion, perseverance, and a strong sense of purpose, anything is possible.
          </p>
        </div>
        <div class="col-lg-6">
          <br><br><br>
          <img src="https://i.postimg.cc/YCm4V4KB/06263c1f-093a-47cd-b87e-fdc7a75d5209.jpg" alt="about3">
        </div>
      </div>
      
      <br><hr><br><br>
      <br><br><br>

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

<style scoped>
h1{
  text-align: left;
}
</style>