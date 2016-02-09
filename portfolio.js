// JavaScript Document

//call to jQuery ready function that checks whether or not the browser is
//ready to load the page
$(document).ready(function () {
    
    var image1, image2, fullImage;

    //send a message to the console window to check 
    //if this page is being read
    console.log("ready");
    
    $('section img').hover(function() {
       //turn off all borders
       turnoffBorders();
       
       //turn on this border
       $(this).css('borderColor','#ccc');
       
       image1=$(this).attr('src');
       console.log('image1: ' + image1);
       
       image2='images/' +$(this).attr('id') + '_th_h.jpg';
       console.log('image2: ' + image2);
       
       //attach rollover image
       $(this).attr('src',image2);
       
   }, function() { //mouseout
       $(this).attr('src',image1);
   
   });
    
    $('section img').click(function() {
        
        var centerImg =$(window).width()/2;
        
        fullImage='images/' + $(this).attr('id') + '.jpg';
        console.log('fullImage: ' + fullImage);
        
        $('#image img').attr('src',fullImage);
        
        //update left value for overlay
        $('#overlay').css('visibility','visible').css('left',centerImg).css('width','0%');
        
        $('#overlay').animate({
            width: '100%',
            left:0
        });
    });
    
    $('#close').click(function() {
        $('#overlay').css('visibility','hidden');
    });
    
    function turnoffBorders() {
        //turn off all borders
        $('section img').css('borderColor','transparent');
    }  
    //close jQuery
});