$(function() {

    $('.products-carousel').owlCarousel({
        loop: true,
        smartSpeed: 700,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
    
});