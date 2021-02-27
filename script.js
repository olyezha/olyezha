$(document).ready(function () {
    $(window).on({
        scroll: () => {
            if (window.scrollY > 100) {
                $('.back').fadeOut();
                $('.learn-more-about-me').fadeOut();
                $('.its-me').fadeOut();
                $('.scroll-down').fadeOut();
            } else {
                $('.back').fadeIn();
                $('.learn-more-about-me').fadeIn();
                $('.its-me').fadeIn();
                $('.scroll-down').fadeIn();
            }
        }


    })

    $(window).on({
        scroll: () => {
            if (window.scrollY > 230) {
                $('.milestones-achieved').fadeIn();
            } else {
                $('.milestones-achieved').fadeOut();
            }
        }
    })

    $(window).on({
        scroll: () => {
            if (window.scrollY > 230) {
                $('.footer-menu').fadeIn();
            } else {
                $('.footer-menu').fadeOut();
            }
        }
    })

    $(window).on({
        scroll: () => {
            if (window.scrollY > 820) {
                $('.powered-by').fadeIn();
            } else {
                $('.powered-by').fadeOut();
            }
        }
    })

    $(window).on({
        scroll: () => {
            if (window.scrollY > 320) {
                $('.arrow-up').fadeIn();
            } else {
                $('.arrow-up').fadeOut();
            }
        }
    })


    $('.scroll-down').click(() => {
        $('html').animate({
            scrollTop: 1500
        }, 900)
    })

    $('.arrow-up').click(() => {
        $('html').animate({
            scrollTop: -900
        }, 900)
    })

    $(function () {
        $(".dial").knob();
    });




    $(window).on({
        scroll: () => {
            if (scrollY > 400) {
                $(".dial-one").knob();
                $({ animatedVal: 0 }).animate({ animatedVal: 78 }, {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        $(".dial-one").val(Math.ceil(this.animatedVal)).trigger("change");
                    }
                });
            
                $(".dial-two").knob();
                $({ animatedVal: 0 }).animate({ animatedVal: 83 }, {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        $(".dial-two").val(Math.ceil(this.animatedVal)).trigger("change");
                    }
                });
            
                $(".dial-three").knob();
                $({ animatedVal: 0 }).animate({ animatedVal: 37 }, {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        $(".dial-three").val(Math.ceil(this.animatedVal)).trigger("change");
                    }
                });
            
                $('.skills').fadeIn();
            } else {
                $('.skills').fadeOut();
            }
        }
    })

    $(window).ready(function(){
        $(".soc").fadeIn('slow');
     });


     $(window).on({
        scroll: () => {
            if (window.scrollY > 320) {
                $('.about-teext').fadeOut();                
            } else {              
                $('.about-teext').fadeIn();
            }
        }
    })

})
