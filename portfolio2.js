// JavaScript Document

//call to jQuery ready function that checks whether or not the browser is
//ready to load the page
$(document).ready(function () {

    //send a message to the console window to check 
    //if this page is being read
    console.log("ready");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backtop').fadeIn('slow');
        } else {
            $('#backtop').fadeOut('slow');
        }
    });
    $('#backtop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    
$('#container ol li a').click(function(){
    var link = $(this).attr('href');
    event.preventDefault();
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1000);
    });

});