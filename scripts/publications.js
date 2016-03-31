$(document).ready(function() {
    console.log("ready");
$('nav ol li a').click(function(){
    var link = $(this).attr('href');
    event.preventDefault();
        $('html, body').animate({
            scrollTop: $(link).offset().top + 30
        }, 1000);
    });
});