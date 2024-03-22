import { Swiper } from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const swiperTargets = document.querySelectorAll(".swiper-container");
let allSwipers = [];
let reverse = false;

swiperTargets.forEach(div => {
    const swiper = new Swiper(div, {
        direction: "horizontal",
        modules: [Autoplay],
        watchOverflow: true,
        slidesPerView: 1,
        loop: true,

        autoplay: {
            delay: 3000,
            reverseDirection: reverse
        },
        preloadImages: true,
    });
    allSwipers.push(swiper);
    reverse = !reverse;
});