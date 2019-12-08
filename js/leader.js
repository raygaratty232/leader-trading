function inputNumber (add, el) {
    el.val( function(i, v) {
        if ( add === 2 ) {
            if ( v < 100 ) {
                v++;
            }
            return v;
        }
        else  {
            if ( v > 1 ) {
                v--;
            }
            return v;
        }
    } );
}
$(document).ready(function(){

    $('.menu').click(function(){
        $('.menu-section').toggleClass('show-menu-media')
    })


    $('.more-filters').click( function () {
        $(this).prev('.hb').slideToggle();
    } );
    $('.load-more-f').click( function () {
        $('.hb-f').slideToggle();
    } );

    if($('.t , .t-lvl-two').hasClass('close')){
        $('.t').next().slideUp();
        $('.level-t').slideUp();
    } 
    $('.t , .t-lvl-two').click( function () {
        $(this).toggleClass('close').next().slideToggle();

    } );




    /*var xtop = 0;
    $(document).scroll( function () {
        var scrollParent = $( window ).scrollTop();

        //console.log(scrollParent + '=' + xtop);
        if (scrollParent <= 100) {
            $('.header').addClass('act-2');
        } else {
            $('.header').removeClass('act-2');
        }

        if (scrollParent >= xtop) {
            xtop = scrollParent;
            $('.header').addClass('act');
            $('.qwe.production-items .before-menu').hide();
        } else if (scrollParent < xtop) {
            xtop = scrollParent;
            $('.header').removeClass('act');
            $('.qwe.production-items .before-menu').show();
        }
    } );*/
    function tabMainMenu(){
        $('#full-menu li').click( function () {
            var getThisAttr = $(this).attr("data-ident");
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.out-list-menu-container .out-list-menu-block').hide();
            $('.out-list-menu-container .out-list-menu-block[data-menu-id="'+ getThisAttr +'"]').show();

        } );
    }
    tabMainMenu();
    function menuLevelControll () {
        $('.menu-level ul li a').click( function () {
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        } );
        $('.menu-mob-ico').click( function () {
            $('.menu-mobile').addClass('active');
        } );
        $('.top-menu-mob .close').click( function () {
            $('.menu-mobile').removeClass('active');
        } );
    }
    menuLevelControll();
    function typeOutCatalogBlock() {
        $('.type-to-show').click( function () {
            if($(this).hasClass('table')) {
                $('.product-cat').removeClass('list');
            } else {
                $('.product-cat').addClass('list');
            }
        } );
    }
    typeOutCatalogBlock();
    $('.left .minus').click(function (e) {
        var val = $(this).parent().next().children().val();
        if (val != 0 ) {
            val--;
            if (val==0) val = '1';
            $(this).parent().next().children().val(val);
        }
        e.preventDefault();
        e.stopPropagation();
    });
    $('.next-toggle').click(function () {
        $(this).next().slideToggle();
    });
    $('.left .plus').click(function (e) {
        var val = $(this).parent().next().children().val();
        val++;
        $(this).parent().next().children().val(val);
        e.preventDefault();
        e.stopPropagation();
    });
    $('select.cataog-f').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        console.log($this + 'qqqq');
        $styledSelect.html("<span class='tm'>" + $this.attr('data-text') + "</span>" + "<span class='text'>" + $this.children('option').eq(0).text() + "</span>");


        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            //$styledSelect.text($(this).text()).removeClass('active');
            $styledSelect.children().next().text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    $('a[href="#"]').click( function (e) {
        e.preventDefault();
    } );
    function popap () {
        $(' .sign-in-show , .user').click( function (e) {
            $('.popap_section').show();
            $('div.reg').hide();
            $('.sign-in').show();
            e.preventDefault();
        } );
        $(' .regiser-call ').click( function (e) {
            $('.popap_section').show();
            $('.sign-in').hide();
            $('div.reg').show();
            e.preventDefault();
        } );

        $('.call-back-link').click( function (e) {
            $('.popap_section').show();
            $('.sign-in').hide();
            $('div.reg').hide();
            $('.call-back').show();
            e.preventDefault();
        } );
        $('.close_popap').click( function (e) {
            $('.popap_section').hide();
            $('.popap_block').hide();
            $('.sign-in').hide();
            $('.call-back').hide();
            $('.div.reg').hide();
        } );
        $('.button-ps .send').click( function (e) {
            $('.popap_section').hide();
            $('.porocessing').hide();
        } );

        $('.bg_popap').click( function (e) {
            $('.popap_section').hide();
            $('.popap_block').hide();
            $('.sign-in').hide();
            $('.call-back').hide();
            $('div.reg').hide();
        } );
    }
    popap();

    $('.promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrows: false,
        // autoplay: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    arrows: false,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slide-act-m').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrows: false,
        autoplay: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // $('.slide-act-m .slick-dots li').click( function () {
    //     var getOffsetTopTab = $(".tabs-contaier").offset().top;
    //     setTimeout( function () {
    //         $('html, body').animate({
    //             scrollTop : getOffsetTopTab
    //         }, 500);
    //     }, 500);

    // } );
    $('.slider-brands').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrows: true,
        autoplay: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.media-slider').slick({
        slidesToShow : 1,
        slidesToScroll : 1,
        arrows : true,
        prevArrow : '<button type="button" class="media-prev"></button>',
        nextArrow : '<button type="button" class="media-next"></button>'
    })

    // catalog navigation controll first tag end remove text for mobile device.
    if (!$('.qwe').hasClass('main')) {
    }

    $('.title-history-payment').click( function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
        if ($(this).parent().hasClass('act')) {
            $(this).find(".toggle-block").html('-');
        } else {
            $(this).find(".toggle-block").html('+');
        }
    } );
    function resizeRequest () {
        if ($(document).width() <= 480 ) {

        } else {

        }
    }
    resizeRequest();
    $(window).resize( function () {

        resizeRequest();

    } );
});
