<template>
<div class="w-full">
    <!-- our works images -->
    <h2 class=" font-bold text-base m-4 xl:text-xl xl:py-5 2xl:text-8xl 2xl:mt-14 font-playfair md:text-2xl  primary_heading_sub">Our Works</h2>
    <div class=" 2xl:p-56  ">
        <div class=" primary_heading_main md:flex p-4 md:w-full 2xl:gap-8">
            <div class="m-1 lg:w-full md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[416px] lg:w-full haircut_pic "></a>
            </div>
            <div class=" md:w-[416px] lg:w-full m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a> </div>
            <div class=" md:w-[416px] lg:w-full m-1 md:m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a> </div>
        </div>
        <div class=" primary_heading_sub md:flex px-5 2xl:gap-8">
            <div class="md:w-full md:mr-2 lg:mr-2">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
            <div class=" md:w-full mt-2 md:mt-0">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
        </div>
        <div class=" primary_heading_main md:flex p-4 2xl:gap-8">
            <div class=" md:w-[416px] lg:w-full m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a> </div>
            <div class=" md:w-[416px] lg:w-full m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a>
            </div>
            <div class="md:w-[416px] lg:w-full m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a>
            </div>
        </div>
    </div>
    <div class="m-8">
        <h1 class=" text-xl lg:text-2xl xl:text-2xl font-bold 2xl:text-5xl primary_heading_sub">The Razor King Barber</h1>
        <p class="my-3 lg:text-lg xl:text-xl xl:my-8 2xl:text-3xl">Barber Shop In Dutse-Alhaji</p>
        <button class="btn animated_btn btn_effect bg-white bg-transparent w-36 lg:w-44 lg:text-xl xl:w-40 xl:p-2 xl:text-xl 2xl:text-3xl 2xl:w-80 2xl:p-5 xl:border-gray-600 p-2 lg:p-2 font-bold border-gray-500 rounded-md border-2 text-black">Contact</button>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
.haircut_pic:hover {

    animation: moveIn_pic 3s;

    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
}

@keyframes moveIn_pic {
    0% {
        opacity: 0;
        transform: translateX(-10rem);

    }

    60% {
        transform: rotate(180deg);
    }

    80% {
        transform: translateX(1rem);

    }

    100% {
        opacity: 1;
        transform: translate(0);

    }
}
</style>
