$(function () {

    // Banner Slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
    });

    // service Slider
    $('.service-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
    },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
    }

  ]
    });
    // Blog Slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: '.right',
        prevArrow: '.left',
        speed: 2000,
        centerMode: true,
        centerPadding: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
    }
  ]
    });

    //vedio 
    $('.venobox').venobox();

    // filter
    var containerEl = document.querySelector('.gal-main');
    var mixer = mixitup(containerEl);

    //counter
    $('.counter').counterUp({
        delay: 50,
        time: 10000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
  ]
    });
    //animate
    $('.back-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2500);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 400) {
            $('.back-top').fadeIn(500);
        } else {
            $('.back-top').fadeOut(500);
        }
        if (scrolling > 900) {
            $('.navbar').addClass('bg');
        } else {
            $('.navbar').removeClass('bg');
        }
    });

    /*$(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500);
    });
*/
    //animation scroll js
    var html_body = $('html, body');
    $('.collapse a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 115
                }, 1500);
                return false;
            }
        }
    });

    
    //Typed js
    $(".typed").typed({
        strings: ["Developers.", "Designers.", "People."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

    //wow js

    new WOW().init();

    //    //timer js
    //
    //    const second = 1000,
    //        minute = second * 60,
    //        hour = minute * 60,
    //        day = hour * 24;
    //
    //    let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
    //        x = setInterval(function () {
    //
    //            let now = new Date().getTime(),
    //                distance = countDown - now;
    //
    //            document.getElementById('days').innerText = Math.floor(distance / (day)),
    //                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    //                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    //                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    //
    //            //do something later when date is reached
    //            //if (distance < 0) {
    //            //  clearInterval(x);
    //            //  'IT'S MY BIRTHDAY!;
    //            //}
    //
    //        }, second)


});
