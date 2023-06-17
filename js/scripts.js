$(document).ready(function () {
    /*---------------------------------------------------end*/

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header, body').toggleClass('active');
    })

    /*---------------------------------------------------end*/

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 40, }, 300,)
    })
    /*---------------------------------------------------end*/
    $('.hero').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        centerPadding: '',
        slidesToShow: 1,
        swipeToSlide: true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                }
            },
        ]
    });

    $('.product-mobSlider').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        infinite: true,
        speed: 300,
        centerPadding: '4px',
        swipeToSlide: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 700,
                settings: "unslick",
            },
        ]
    });

    $('.product-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        centerPadding: '',
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    centerMode: false,
                    centerPadding: '30px',
                    variableWidth: false,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerMode: false,
                    centerPadding: '20px',
                    variableWidth: false,
                    dots: true
                }
            },
        ]
    });

    $('.certificates-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        centerPadding: '25px',
        slidesToShow: 3,
        swipeToSlide: true,
        centerMode: true,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '20px',
                    variableWidth: false,
                    dots: true
                }
            },
        ]
    });

    $('.clients-slider').slick({
        dots: true,
        arrows: false,
        rows: 2,
        infinite: true,
        speed: 300,
        centerPadding: '',
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    /*---------------------------------------------------end*/

    $('input[type="tel"]').inputmask({ "mask": "8-999-999-99-99" });

    /*---------------------------------------------------end*/

    $('.dropdown-btn').click(function () {
        $(this).next('.dropdown-content').slideDown();
        $(this).remove();
    });

});

