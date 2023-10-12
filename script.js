const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.querySelector(".img9");

document.addEventListener(`DOMContentLoaded`, function() {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
    });

    img1.addEventListener("click", () => {
        swiper.slideTo(0);
    });

    img2.addEventListener("click", () => {
        swiper.slideTo(1);
    });

    img3.addEventListener("click", () => {
        swiper.slideTo(2);
    });

    img4.addEventListener("click", () => {
        swiper.slideTo(3);
    });

    img5.addEventListener("click", () => {
        swiper.slideTo(4);
    });

    img6.addEventListener("click", () => {
        swiper.slideTo(5);
    });

    img7.addEventListener("click", () => {
        swiper.slideTo(6);
    });

    img8.addEventListener("click", () => {
        swiper.slideTo(7);
    });

    img9.addEventListener("click", () => {
        swiper.slideTo(8);
    });

});
