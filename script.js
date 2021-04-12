$(function () {
    $(".produkt").slice(0, 3).show();
    $("#load").on('click', function (e) {
        e.preventDefault();
        $(".produkt:hidden").slice(0, 3).slideDown();
        if ($(".produkt:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});