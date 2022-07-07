<template>
<div class="w-full">
    <div class=" m-4">
        <h1 class="font-bold font-sans text-xl  font-playfair md:text-xl lg:text-2xl  primary_heading_main">Testimonials</h1>
    </div>
    <div class="reviews w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 p-5 text-base">
          <div class="testimonials">
              <h3 class="mb-10  md:text-normal lg:text-xl ">If you need to use a one-off background-image 
          value that doesn’t make sense to include in your 
          theme, use square brackets to generate a property 
          on the fly using any arbitrary value.</h3>
              <p> - Amarachi J. </p>
          </div>
          <div class="testimonials">
              <h3 class="mb-10 md:text-normal lg:text-xl">If you need to use a one-off background-image 
          value that doesn’t make sense to include in your 
          theme, use square brackets to generate a property 
          on the fly using any arbitrary value.</h3>
              <p> - Amarachi J. </p>
          </div>
          <div class="testimonials">
              <h3 class="mb-10 md:text-normal lg:text-xl">If you need to use a one-off background-image 
          value that doesn’t make sense to include in your 
          theme, use square brackets to generate a property 
          on the fly using any arbitrary value.</h3>
              <p> - Amarachi J. </p>
          </div>
          <div class="testimonials">
              <h3 class="mb-10 md:text-normal lg:text-xl">If you need to use a one-off background-image 
          value that doesn’t make sense to include in your 
          theme, use square brackets to generate a property 
          on the fly using any arbitrary value.</h3>
              <p> - Amarachi J. </p>
          </div>

      </div>

   

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .testimonials{
        @apply col-span-1 text-base bg-slate-50 border-0 rounded-lg shadow-lg shadow-neutral-300 text-left p-6;
    }
</style>
