$(document).ready(function() {
    console.log("ready");
$('ul.tabnav li a').click(function(){
    var link = $(this).attr('href');
    event.preventDefault();
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 1000);
    });    
});