$(document).ready(function () {
    /*---------------------------------------------------end*/

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header .navbar').slideToggle();
    })

    /*---------------------------------------------------end*/

    $('.dropdown-btn').click(function () {
        $(this).next('.dropdown-content').slideToggle();
        $(this).toggleClass('active');
    });

    /*---------------------------------------------------end*/

    $('.sort-btn').click(function () {
        $(this).next('.sort-content').slideToggle(200);
    });
    $('.sort-content button').click(function () {
        $(this).parent('.sort-content').slideToggle(200);
        $(this).parent('.sort-content').prev().text($(this).text());
        $(this).parent('.sort-content').prev().addClass('active');
    });
    
    /*---------------------------------------------------end*/
    
    $('.category-filter__show, .category-filter__ready').click(function () {
        $('.category-filter').fadeOut(300);
        $('.header').removeClass('down');
        $('body').removeClass('active');
    });
    
    $('#filterShow').click(function () {
        $('.category-filter').fadeIn(300);
        $('.header').addClass('down');
        $('body').addClass('active');
    });

    /*---------------------------------------------------end*/

    function hideModals() {
        $('.modal').fadeOut();
        $('.modal, body, [data-modal]').removeClass('active');
    };
    $(function () {
        function showModal(id) {
            if ($(id).hasClass('active')) {
                $(id).fadeOut(300)
                $(id).removeClass('active');
                $('body').removeClass('active');
            } else {
                $(id).addClass('active')
                $('body').addClass('active');
                $(id).fadeIn(300);
            }
        }

        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active')
            showModal('#' + $(this).attr("data-modal"));
        });

        $('.modal-close').on('click', () => {
            hideModals();
        });

        $(document).on('click', function (e) {
            if (!(
                ($(e.target).parents('.modal-content').length) ||
                ($(e.target).parents('.nav').length) ||
                ($(e.target).hasClass('btn')) ||
                ($(e.target).hasClass('show-more')) ||
                ($(e.target).hasClass('modal-content'))
            )) {
                hideModals();
            }
        });
    });

    /*---------------------------------------------------end*/

    function handleResponsive() {
        if ($(window).width() > 700) {
            $('#modal-catalogue ul').each(function () {
                var $ul = $(this);
                var $li = $ul.find('li');

                if ($li.length > 3) {
                    $li.slice(3).hide();
                    if (!$ul.next('.show-more').length) {
                        $ul.after('<button class="show-more">Показать</button>');
                    }
                }
            });
        } else {
            $('.show-more').remove();
            $('#modal-catalogue ul li').show();
        }
    }
    handleResponsive();

    $(window).resize(function () {
        handleResponsive();
    });

    $(document).on('click', '#modal-catalogue h3', function () {
        if ($(window).width() < 700) {
            $(this).next('ul').slideToggle();
        }

    });

    $(document).on('click', '.show-more', function () {
        $(this).prev('ul').find('li').show();
        $(this).remove();
    });


    /*---------------------------------------------------end*/

    if ($('div').hasClass('filter')) {
        var toggler = $("#filter__toggler");
        var buttons = $(".filter__btn");

        function togglerHide() {
            toggler.text('Показать ещё')
            toggler.addClass('toggle');
            buttons.slice(0, buttons.length / 2).hide();
        } togglerHide()

        buttons.click(function () {
            $(this).toggleClass('active')
        })
        toggler.click(function () {
            if (toggler.hasClass('toggle')) {
                buttons.show();
                toggler.removeClass('toggle');
                toggler.text('Скрыть')
            }
            else {
                togglerHide();
            }
        });
    }

    /*---------------------------------------------------end*/

    if ($('section').hasClass('ordering')) {
        $(document).ready(function () {
            $('input[type="radio"]').click(function () {
                if ($('#delivery3').is(':checked')) {
                    $('.ordering-delivery').slideDown();
                    $('#ordering_address').attr('required', true);
                } else {
                    $('.ordering-delivery').slideUp();
                    $('#ordering_address').removeAttr('required');
                }
            });

            // Проверить и скрыть блок при загрузке страницы, если нужно
            if (!$('#delivery3').is(':checked')) {
                $('.ordering-delivery').hide();
                $('#ordering_address').removeAttr('required');
            }
        });

    }

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

    if ($('div').hasClass('certificates-slider')) {
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
    }

    if ($('div').hasClass('clients-slider')) {
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
    };

    /*---------------------------------------------------end*/

    // $('input[type="tel"]').inputmask({ "mask": "8-999-999-99-99" });

    /*---------------------------------------------------end*/



});

