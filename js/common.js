$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.menu').on('click','a', function(){
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
    });
});
