(function($) {
    'use strict';
    jQuery(document).on('ready', function() {
        $('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        $('.search-option button').on('click', function() {
            $('.search-input').toggle(200)
        })

        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });
        $(window).on('load', function() {
            $('.top-btn').fadeOut();
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('.top-btn').fadeIn();
            } else {
                $('.top-btn').fadeOut();
            }
        });
        $('.top-btn').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
        $(window).on('load', function() {
            $(".loader-content").fadeOut(1000);
        })
        $(".newsletter-form").validator().on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                event.preventDefault();
            }
        });

        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }

        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function() {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }

        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function() {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000)
        }

        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }
        $(".newsletter-form").ajaxChimp({
            url: "https://HiBootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
            callback: callbackFunction
        });
    });
})(jQuery);