$("document").ready(function() {

    $(window).on("scroll touchmove", function () {
        $('body .content:nth-of-type(1)').toggleClass('purple', $(document).scrollTop() > 500);
    });

    $(window).on("scroll touchmove", function () {
      $('.content:nth-of-type(2)').toggleClass('orange', $(document).scrollTop() > 1000);
    });

    $(window).on("scroll touchmove", function () {
      $('#s4').toggleClass('orange', $(document).scrollTop() > 1000);
    });



});
