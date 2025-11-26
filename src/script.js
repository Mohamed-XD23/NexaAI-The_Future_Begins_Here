$(document).ready(function () {
    //initialize swiper 
    const swiper = new Swiper(".team-swiper", {
        slidesPerView: 1, // default view we use 1 for small screen and we customize it in other screen in breakpoints
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints: {
            // when the window width >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width >= 768px
            768: {
                slidesPerView: 3,
            }
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }

    })
})