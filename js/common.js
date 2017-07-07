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
    
    $('.customer-carousel').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 700,
        autoHeight: true,
    });
    
    $(function() {
        $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
        } else {
        $('#toTop').fadeOut();
        }
        });
        $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},900);
        });
    });
    
    var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 900);
            return false;
    });
    
});