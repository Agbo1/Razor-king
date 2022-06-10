<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <serviceLocation />
    <Testimonials />
    <ourWork />
    <pageFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/navBar.vue'
import serviceLocation from '@/components/serviceLocation.vue'
import Testimonials from '@/components/testimonialsReviews.vue'
import ourWork from '@/components/ourWork.vue'
import pageFooter from '@/components/pageFooter.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    serviceLocation,
    Testimonials,
    ourWork,
    pageFooter
  }
}
</script>
