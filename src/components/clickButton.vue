<template>
  <div class=" my-4">
      <button class="btn animated_btn btn_effect bg-white w-36 p-3.5 text-black font-semibold rounded-md m-2 xl:w-40 xl:p-3.5 xl:mr-5 xl:text-md 2xl:w-60 2xl:p-7 2xl:text-4xl">Back  </button>
      <button class="btn animated_btn btn_effect btn_effect_bg bg-transparent w-36 p-3 border-slate-100 rounded-md border-2 text-white font-medium xl:w-40 xl:p-3 xl:text-md 2xl:w-60 2xl:p-6 2xl:text-4xl">Contact</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>



@keyframes moveInBottom {
    0% { opacity: 0;
        transform: translateY(3rem);

    }

    100% { opacity: 1;
           transform: translate(0);


    }
}



.btn::after {
    content: "";
    /* display: inline-block; */
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
}

.btn_effect::after{
  background-color: rgba(255, 255, 255, 0.351);
}

.btn_effect_bg::after{
  background-color: hsla(0, 20%, 99%, 0.175);
}

.btn_effect:hover::after{
    transform: scaleX(1.5) scaleY(1.7);
    opacity: 0;
}

.btn_effect:visited {
    text-transform: uppercase;
    display: inline-block;
    transition: all .2s;
    position: relative;
    font-size: 1.5rem;


}

.animated_btn{
  animation: moveInBottom .7s ease-out .75s;
  animation-fill-mode: backwards;

}

</style>