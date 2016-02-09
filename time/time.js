// JavaScript Document

//call to jQuery ready function that checks whether or not the browser is
//ready to load the page
$(document).ready(function () {
	
	//send a message to the console window to check 
	//if this page is being read
	console.log("ready");
	
	//variable for number of items clicked
    var collectedItems = 0;
    
    //each time item image clicked, events happen
    $('img').click(function () {
        $(this).fadeOut();
        collectedItems += 1;
        console.log("You've got" + collectedItems + "items");
        if (collectedItems === 3) {
            console.log("collected all three!");
            window.open('time2.html', '_self', false);
        }
    });
    //hides all tool tips
    $('.tip').hide();
    //tooltip (hover takes two functions)
	$('.word').hover(function () { // first function
		 console.log("mouseover tooltip");
		 
		 //make sure the selector is correctly targeting the .tip
		 // in the form of '#myID .myClass'
		 console.log($("#" + this.id + " .tip"));
		 
		 //turn on the tool tip
		$("#" + this.id + " .tip").show();
		
	  }, function() { // second function
    $("#" + this.id + " .tip").hide();
  });
    //listen for clicks on links to change timetable list
    $('#eat').click(function() {
		console.log("clicked eat");
		newTime('eat');
        $('#timetable').slideToggle();
		return false;
	});
     $('#life').click(function() {
		console.log("clicked life");
		newTime('life');
        $('#timetable').slideToggle();
		return false;
	});
     $('#work').click(function() {
		console.log("clicked work");
		newTime('work');
        $('#timetable').slideToggle();
		return false;
	});
     $('#relax').click(function() {
		console.log("clicked relax");
		newTime('relax');
        $('#timetable').slideToggle();
		return false;
	});
    $('#times li').draggable({
        revert : 'invalid',
        cursor: 'pointer',
        snap: '#clockFace',
        start : function (event, ui) {
            ui.helper.css('transform', 'rotate(0deg) scale(1.5)');
        },
        stop : function (event, ui) {
            ui.helper.css('transform', 'rotate(0deg) scale(3)');
        },
        zIndex : 100
    });
    $('#clockFace').droppable({
        activeClass : 'highlight',
        drop : function (event, ui) {
            ui.helper.hide('fade');
            $(this).attr('src', 'images/clockface.jpg');
            var draggable = ui.draggable;
            console.log('Time with ID ' + draggable.attr('id') + ' was dropped!');
            $('#activityList').data('time', {first: draggable.attr('id')});
            $('span:last').text($('#activityList').data('time').first);
            specificTime( draggable.attr('id') );
        }
    });
        function specificTime(IDofObject) {
            $('#activityList').css('visibility', 'visible');
            if (IDofObject == '8:15PM') {
                $('#activityList p').text('eating dinner.');
                console.log('you ate dinner at 8:15PM');
            } else if (IDofObject == '8:30PM') {
                $('#activityList p').text('washing dishes, cleaning the kitchen, and doing general household chores.');
                console.log('cleaned at 8:30PM');
            } else if (IDofObject == '8:45PM') {
                $('#activityList p').text('checking email and looking up resources online for club work.');
                console.log('club work at 8:45PM');
            }
            else if (IDofObject == '9:00PM') {
                $('#activityList p').text('doing design work for club in Illustrator.');
            }
            else if (IDofObject == '9:15PM') {
                $('#activityList p').text('still doing design work for club in Illustrator.');
            }
            else if (IDofObject == '11:00PM') {
                $('#activityList p').text('stilllll doing design work for club in Illustrator. Yawn.');
            }
            else if (IDofObject == '11:15PM') {
                $('#activityList p').text('checking email and browsing randomly online.');
                console.log('cleaned at 8:30PM');
            }
            else if (IDofObject == '11:30PM') {
                $('#activityList p').text('taking a break, finishing washing dishes, and answering email.');
            }
            else if (IDofObject == '11:45PM') {
                $('#activityList p').text('answering email (still!), cleaning their room, and waiting for very laggy internet.');
            }
            else if (IDofObject == '12:00AM') {
                $('#activityList p').text('discussing club activities/responsibilities and chatting with a friend.');
            }
            else if (IDofObject == '12:30AM') {
                $('#activityList p').text('answering miscellaneous online messages.');
            }
            else if (IDofObject == '12:45AM') {
                $('#activityList p').text('discussing club activities and checking over/supervising design work for club.');
            }
            else if (IDofObject == '1:00AM') {
                $('#activityList p').text('taking a shower.');
            }
            else if (IDofObject == '1:15AM') {
                $('#activityList p').text('eating fruit while watching shows online.');
                console.log('cleaned at 8:30PM');
            }
            else if (IDofObject == '2:15AM') {
                $('#activityList p').text('sleeping.');
            }                
        }
//close jQuery
});

function newTime(whichTime) {
    console.log(whichTime);
    $('#timetable').css('visibility', 'visible');
    
    if (whichTime === 'eat') {
        $('#timetable').html('<ol><li><span>8:15PM</span> Dinner</li><li><span>1:15AM</span> Ate fruit while watching TV shows.</li></ol>');
    } else if (whichTime === 'life') {
        $('#timetable').html('<ol><li><span>8:30PM</span> Washed dishes, cleaned kitchen, general household chores.</li><li><span>11:30PM</span> Finished washing dishes.</li><li><span>11:45PM</span> Cleaned room.</li><li><span>1:00AM</span> Showered.</li><li><span>2:15AM</span> Slept.</li></ol>');
    } else if (whichTime === 'work') {
        $('#timetable').html('<ol><li><span>8:45PM</span> Checked email, looked up resources online for club work.</li><li><span>9:00~11:00PM</span> Design work for club in Illustrator.</li><li><span>11:15PM</span> Checked email.</li><li><span>11:45PM</span> Answered email, waited for laggy internet.</li><li><span>12:00~12:15AM</span> Discussing club activities/responsibilities.</li><li><span>12:30AM</span> Answering messages.</li><li><span>12:45AM</span> Discussed club activities/responsibilities, checked over/supervised design work for club.</li></ol>');
    } else if (whichTime === 'relax') {
        $('#timetable').html('<ol><li><span>11:15PM</span> Browsed randomly online.</li><li><span>11:30PM</span> Break.</li><li><span>12:00AM</span> Chatting with friend.</li><li><span>1:15~2:00AM</span> Watching shows online.</li></ol>');
    }
}