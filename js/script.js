// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// animated page scrolling with jQuery Easing
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeOutCirc');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Fade in icon
$('.herologo').fadeTo(2500, 1, function() {
    // Fade in h2
    $(".herocontent h2").fadeTo(2000, 1);
    // Fade in h1
    $(".herocontent h1").fadeTo(1500, 1, function() {
        // Face in download button
        $(".herocontent .download").fadeTo(1000, 1);
        // Fade in navbar
        $(".navbar").fadeTo(1000, 1, function(){
            $("#howitworks").show();
        });
    });
});
