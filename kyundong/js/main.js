document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper === 'undefined') {
        return;
    }

    const sideItems = document.querySelectorAll('#hero .side-nav li');

    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 1200,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '#hero .hero-arrow.prev',
            nextEl: '#hero .hero-arrow.next',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function () {
                setActiveSideNav(this.realIndex);
            },
            slideChange: function () {
                setActiveSideNav(this.realIndex);
            },
        },
    });

    sideItems.forEach(function (item, index) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            heroSwiper.slideToLoop(index);
        });
    });

    function setActiveSideNav(activeIndex) {
        sideItems.forEach(function (item, index) {
            item.classList.toggle('active', index === activeIndex);
        });
    }
});
