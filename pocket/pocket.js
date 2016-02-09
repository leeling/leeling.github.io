//Javascript document
$(document).ready(function () {
    
    $('a').hover(function() {
 	 $(this).siblings('.hoverText').animate({
	  //the css for #hoverAnimate has position:relative declared
    top:'25px',
  	});
  }, function(){;	
	  $(this).siblings('.hoverText').animate({
	top:'0px', //puts text back at original location
      });
    });
    
    $('a').hover(function(){
		//text opacity changes to 100%
		$(this).siblings('.hoverText').css('opacity','1');
		},function(){
		$(this).siblings('.hoverText').css('opacity','0');
    });

  //listen for clicks on links to change text
    $('#brush').click(function(){
		console.log("clicked brush");
		newItem('brush');
		return false;	
	});
     $('#notebook').click(function(){
		console.log("clicked notebook");
		newItem('notebook');
		return false;	
	});
     $('#ipod').click(function(){
		console.log("clicked ipod");
		newItem('ipod');
		return false;	
	});
     $('#coin').click(function(){
		console.log("clicked coin");
		newItem('coin');
		return false;	
	});
     $('#planner').click(function(){
		console.log("clicked planner");
		newItem('planner');
		return false;	
	});
    
});

function newItem(whichItem){
	console.log(whichItem);
	//show description box
	$('#description').css('visibility','visible');
    $('#description2').css('visibility','visible');
	
	//check argument passed from html with the onClick event call
	if (whichItem=='brush'){
			//push appropriate text into the description
			$('#itemName').html('paint brush');
            $('#itemName2').html('paint brush');
			$('#description').text("What? Why's this in my bag? I don't really paint, but I'm hoping to learn this quarter. I guess you could call me an artist. Mechanical pencil and tablet are my main tools of choice!");
        $('#description2').text("What? Why's this in my bag? I don't really paint, but I'm hoping to learn this quarter. I guess you could call me an artist. Mechanical pencil and tablet are my main tools of choice!");
			
			//check if notebook was the button pressed
			} else if (whichItem=='notebook'){
					//push appropriate text
					$('#itemName').html('small notebook');
                    $('#itemName2').html('small notebook');
					$('#description').text("For jotting down spur-of-the-moment ideas and inspirations, or that last-minute grocery list. Sometimes contains story ideas. I'd like to write a novel someday.");
                    $('#description2').text("For jotting down spur-of-the-moment ideas and inspirations, or that last-minute grocery list. Sometimes contains story ideas. I'd like to write a novel someday.");
						
			//check if ipod was the button pressed
			} else if (whichItem=='ipod'){
				//push appropriate text
					$('#itemName').html('ipod shuffle');
                    $('#itemName2').html('ipod shuffle');
					$('#description').text("Because I'm cheap and don't have a proper music player with a screen. I like listening to music all the time; when I'm walking down the street and want to feel cool, playing Pirates of the Caribbean or angry kpop is the way to go.");
                    $('#description2').text("Because I'm cheap and don't have a proper music player with a screen. I like listening to music all the time; when I'm walking down the street and want to feel cool, playing Pirates of the Caribbean or angry kpop is the way to go.");
							
			//check if coin was the button pressed
			} else if (whichItem=='coin'){
				//push appropriate text
					$('#itemName').html('coin purse');
                    $('#itemName2').html('coin purse');
					$('#description').text("Because money is very important to me. All my coins wouldn't fit in my wallet, so I had to use this. I'll use all those pennies one day, dangit! I got the purse from a street vendor in Taiwan.");
                    $('#description2').text("Because money is very important to me. All my coins wouldn't fit in my wallet, so I had to use this. I'll use all those pennies one day, dangit! I got the purse from a street vendor in Taiwan.");
							
			//check if planner was the button pressed
			} else if (whichItem=='planner'){
				//push appropriate text
					$('#itemName').html('schedule planner');
                    $('#itemName2').html('schedule planner');
					$('#description').text("I like to stay organized and clean when I can, because I get stressed easily. Still haven't used this yet, but it has some of my favorite characters on the cover: Moomin!");
                    $('#description2').text("I like to stay organized and clean when I can, because I get stressed easily. Still haven't used this yet, but it has some of my favorite characters on the cover: Moomin!");
            }
}