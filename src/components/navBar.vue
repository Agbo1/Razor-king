<template>
  <div class=" banner_gradient banner_image w-full p-4 lg:p-6 bg-banner bg-no-repeat bg-cover bg-center 2xl:p-14">
    <div class="nav flex m-2  justify-between">
      <div class="logo">
        <div class="img">

        </div>
        <div class="">
          <h3 class=" logo font-playfair text-lg lg:text-2xl xl:text-xl text-white 2xl:text-7xl">The Razor King </h3>

        </div>

      </div>
      <div class=" hidden md:flex justify-end gap-5 font-sans  text-white xl:text-xl text-xl xl:mr-7 2xl:text-6xl">
        <div class="contact 2xl:mr-8 ">
          <a href="#" class="contact">Contact Us</a>
        </div>
        <div class="service">
          <a href="#" class="services">Book Services</a>
        </div>
      </div>

    </div>

    <div class="w-full px-5 leading-3">
      <h1 class=" primary_heading_main text-3xl lg:text-4xl font-serif text-gray-200 font-bold my-5 xl:text-4xl 2xl:text-9xl font-playfair">Nothings Beats A <br> fresh New Haircut</h1>
      <p class=" primary_heading_sub text-lg md:text-lg font-medium font-sans text-white xl:text-2xl 2xl:text-2xl ">Here goes the value proposition and <br> more info of the brand</p>

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
<style >

.banner_image{
  background-image: linear-gradient(to right bottom lightgreen, green, darkgreen);
}

.contact:hover{
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
.service:hover{
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.primary_heading_main{

    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-out;

}

.primary_heading_sub{
    animation: moveInRight 1s ease-out;
    
}

.banner_gradient{
  background-image: linear-gradient(to right bottom, 
  rgba(24, 23, 23, 0.804),
   rgba(28, 18, 26, 0.803), 
   rgba(6, 54, 6, 0.803)), url('/src/assets/razorking.jpg'); 
  
}

@keyframes moveInLeft {
    0% { opacity: 0;
        transform: translateX(-10rem);

    }

    /* 60% {
        transform: rotate(180deg);
    } */

    80% { transform: translateX(1rem);


    }

    100% { opacity: 1;
           transform: translate(0);


    }
}

@keyframes moveInRight {
    0% { opacity: 0;
        transform: translateX(10rem);

    }

    60% {
        /* transform: rotate(120deg); */
    }

    80% { transform: translateX(-1rem);


    }

    100% { opacity: 1;
           transform: translate(0);


    }
}


</style>
