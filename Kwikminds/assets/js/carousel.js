document.addEventListener('DOMContentLoaded', function() {
    var couponCarousel = $('#coupon-carousel');
    var storeCarousel = $('#store-carousel');

    couponCarousel.owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    storeCarousel.owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
});
