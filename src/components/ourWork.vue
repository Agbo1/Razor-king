<template>
<div class="w-full">
    <!-- our works images -->
    <h2 class=" font-bold text-base m-4 font-playfair md:text-xl lg:text-2xl  primary_heading_sub">Our Works</h2>
    <div class="p-4 ">
        <div class=" primary_heading_main md:flex p-4 md:w-full">
            <div class="m-1 lg:w-full md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[416px] lg:w-full haircut_pic "></a>
            </div>
            <div class=" md:w-[416px] lg:w-full m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a> </div>
            <div class=" md:w-[416px] lg:w-full m-1 md:m-1 md:mx-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="w-full haircut_pic"></a> </div>
        </div>
        <div class=" primary_heading_sub md:flex px-5">
            <div class="md:w-full md:mr-2 lg:mr-2 lg:w-6/12">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
            <div class=" md:w-full mt-2 md:mt-0 lg:w-6/12">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
        </div>
        <div class=" primary_heading_main md:flex p-4">
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
        <h1 class=" text-xl md:text-lg lg:text-2xl  font-bold primary_heading_sub">The Razor King Barber</h1>
        <p class="my-3 md:text-lg lg:text-xl ">Barber Shop In Dutse-Alhaji</p>
        <button class="btn animated_btn btn_effect bg-white bg-transparent w-36 lg:w-44 md:text-base lg:text-lg p-2 lg:p-2 font-bold border-gray-500 rounded-md border-2 text-black">Contact</button>
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
