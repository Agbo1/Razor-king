<template>
<div class="w-full">
    <!-- our works images -->
    <h2 class=" font-bold text-base m-4 font-playfair md:text-xl lg:text-2xl  primary_heading_sub">Our Works</h2>
    <div class="p-4 ">
        <div class=" primary_heading_main w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-2">
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic "></a>
            </div>
            <div class=" picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class=" haircut_pic"></a>
            </div>
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic"></a>
            </div>
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic"></a>
            </div>
        </div>
        <div class=" primary_heading_sub gap-2 md:flex px-4">
            <div class="md:w-full my-1  ">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
            <div class=" md:w-full my-1 ">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div>
            <div class=" md:w-full my-1">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="md:w-[515px] lg:w-full haircut_pic"></a>
            </div> 
        </div>
        <div class=" primary_heading_main w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-2">
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic "></a>
            </div>
            <div class=" picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class=" haircut_pic"></a>
            </div>
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic"></a>
            </div>
            <div class="picture">
                <a href="http://www.google.com"><img src="../assets/barbs.jpeg" alt="" class="haircut_pic"></a>
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
/* .haircut_pic:hover {

    animation: moveIn_pic 3s;

    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
} */

.picture {
    @apply col-span-1 w-full sm:w-full mt-2;
}

/* .picture_1 {
    @apply col-span-1 mt-2 md:w-[416px] lg:w-1/5;
} */

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
