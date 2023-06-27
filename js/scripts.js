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
    $('.amount button, .amount a').on('click', function (e) {
        e.preventDefault();
        const inp = $(this).parent('.amount').children('input');
        let count = inp.val();
        if ($(this).hasClass('amount__add')) {
            count++;
        } else {
            count--;
            if (count <= 1) {
                count = 1;
            }
        }
        inp.val(count);
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
    $(document).ready(function () {
        $('[data-tabBtn]').click(function () {
            var tabBtnValue = $(this).attr('data-tabBtn');
            $('[data-tabContent="' + tabBtnValue + '"]').addClass('active');
            $('[data-tabContent]').not('[data-tabContent="' + tabBtnValue + '"]').removeClass('active');
            $('[data-tabBtn]').removeClass('active');
            if ($(this).hasClass('product__link')) {
                $('html, body').animate({ scrollTop: $('[data-tabContent="' + tabBtnValue + '"]').offset().top - 100, }, 500,)
                $('[data-tabBtn="' + tabBtnValue + '"]').addClass('active');
            } else {
                $(this).addClass('active');
            } if (tabBtnValue == 4) {
                // $('.tab-videos').slick('unslick');
                $('.tab-slider').slick({
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    centerPadding: '',
                    slidesToShow: 3,
                    swipeToSlide: true,
                    centerMode: true,
                    slidesToScroll: 1,
                    variableWidth: false,
                    responsive: [
                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                variableWidth: false,
                            }
                        },
                    ]
                });
            } else if (tabBtnValue == 5) {
                // $('.tab-slider').slick('unslick');
                $('.tab-videos').slick({
                    dots: false,
                    arrows: true,
                    infinite: true,
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
                                variableWidth: false,
                            }
                        },
                    ]
                });
            } else {
                // $('.tab-slider').slick('unslick');
                // $('.tab-videos').slick('unslick');
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
    if ($('div').hasClass('card-img')) {
        $('.card-slider').slick({
            infinite: false,
            speed: 300,
            arrows: false,
            dots: false,
            swipeToSlide: true,
            slidesToShow: 1,
            asNavFor: '.card-nav',
            touchThreshold: 9,
            fade: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        fade: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        fade: false,
                        infinite: true,
                        dots: true,
                    }
                }
            ]
        });
        $('.card-nav').slick({
            vertical: true,
            infinite: true,
            draggable: true,
            swipeToSlide: () => {
                $('.card-nav__slide').lenght >= 3 ? ret = true : ret = false;
                return ret;
            },
            dots: false,
            focusOnSelect: true,
            verticalSwiping: true,
            arrows: true,
            slidesToShow: 3,
            centerPadding: '0',
            slidesToScroll: 3,
            asNavFor: '.card-slider',
            centerMode: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        vertical: false,
                        infinite: true,
                        variableWidth: false,
                    }
                },
                {
                    breakpoint: 700,
                    settings: "unslick"
                }
            ]
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

