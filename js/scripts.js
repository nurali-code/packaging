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

    function replaceItem(item) { return Number(item.replace(/[^0-9]/g, "")); }
    function numberWithSpaces(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") };


    $(document).on('click', '[data-modal="modal-click"]', function (e) {
        var pParent = $(this).parents('.card-content'),
            pAmount = pParent.find('.amount input').val();

        if (pParent.length === 0) {
            pParent = $(this).parents('.product');
            pAmount = 1;
        }

        var pName = pParent.find('.p-name').text(),
            pPrice = replaceItem(pParent.find('.p-price').text());

        console.log(pAmount);

        $('#modal-click .name').text(pName);
        $('#modal-click input[name="name"]').val(pName);
        $('#modal-click .price').text(numberWithSpaces(pPrice));
        $('#modal-click input[name="price"]').val(pPrice);
        $('#modal-click .amount input').val(pAmount);
        $('#modal-click .total').text(numberWithSpaces(replaceItem(pPrice) * pAmount) + ' ₽');
        $('#modal-click input[name="total"]').val(numberWithSpaces(replaceItem(pPrice) * pAmount) + ' ₽');
    });

    $(document).on('click', '#modal-click .amount a', function (e) {
        var amount = $('#modal-click .amount input').val();
        var price = $('#modal-click .price').text();
        $('#modal-click .total').text(numberWithSpaces(replaceItem(price) * amount) + ' ₽');
        $('#modal-click input[name="total"]').val(numberWithSpaces(replaceItem(price) * amount) + ' ₽');
    });

    /*---------------------------------------------------end*/

    $(document).on('click', '.cart-item__delete', function (e) {
        var parentItem = $(this).parent('.cart-item');
        parentItem.find('.amount, .cart-item__delete, .cart-item__price, .cart-item__total').addClass('hidden-element').hide();
        if (window.innerWidth <= 1200) {
            parentItem.find('.cart-item__img, .cart-item__heading').addClass('hidden-element').hide();
        }
        parentItem.append('<button class="cart-item__recover">Вернуть в корзину</button>');
    });

    $(document).on('click', '.cart-item__recover', function (e) {
        var parentItem = $(this).closest('.cart-item');
        parentItem.find('.hidden-element').removeClass('hidden-element').show();
        $(this).remove();
    });



    $(document).on('click', '.cart-item button', function (e) {
        var amount = $(this).parents('.cart-item').find('input').val(),
            price = replaceItem($(this).parents('.cart-item').find('.cart-item__price').text()),
            total = $(this).parents('.cart-item').find('.cart-item__total');
        total.text(numberWithSpaces(price * amount) + ' ₽');
        totalCount()
    });

    function totalCount() {
        var totalPrice = 0;
        var totalItems = $('.cart-item');
        if (totalItems.length == 0) {
            $('.total__price').text('0.000 ₽')
        } else {
            for (let index = 0; index < totalItems.length; index++) {
                const element = totalItems[index];
                totalPrice += replaceItem($(element).find('.cart-item__total').text());
                $('.total__price').text(numberWithSpaces(totalPrice) + ' ₽')
            }
        }
    } totalCount()


    /*---------------------------------------------------end*/

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
            $('.tab-videos').slick('unslick');
        } else if (tabBtnValue == 5) {
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
                            variableWidth: true,
                        }
                    },
                ]
            });
            $('.tab-slider').slick('unslick');
        } else {
            // $('.tab-slider').slick('unslick');
            // $('.tab-videos').slick('unslick');
        }

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
    } handleResponsive();

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

