<template>
  <div class="w-full p-4 lg:p-6 bg-banner bg-no-repeat bg-cover bg-center 2xl:p-14">
    <div class="nav flex m-2  justify-between">
      <div class="logo">
        <div class="img">

        </div>
        <div class="">
          <h3 class=" font-playfair text-lg lg:text-2xl xl:text-xl text-white 2xl:text-7xl">The Razor King </h3>

        </div>

      </div>
      <div class=" hidden md:flex justify-end gap-5 font-sans  text-white xl:text-xl text-xl xl:mr-7 2xl:text-6xl">
        <div class="contact 2xl:mr-8 ">
          <a href="#">Contact Us</a>
        </div>
        <div class="book_services">
          <a href="#">Book Services</a>
        </div>
      </div>

    </div>

    <div class="w-full px-5 leading-3">
      <h1 class=" text-3xl lg:text-4xl font-serif text-gray-200 font-bold my-5 xl:text-4xl 2xl:text-9xl font-playfair">Nothings Beats A <br> fresh New Haircut</h1>
      <p class="text-lg md:text-lg font-medium font-sans text-white xl:text-2xl 2xl:text-2xl ">Here goes the value proposition and <br> more info of the brand</p>

      <clickButton />
      
    </div>

    
  </div>
</template>

<script>
import clickButton from './clickButton.vue'
export default {
  name: 'HelloWorld',
  components: {
    clickButton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
