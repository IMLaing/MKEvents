$(function(){
	
//  Scroll to Top  
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
	//Remove outline from links
	$("#navButton").click(function(){
		$(this).blur();
	});
	
	//When mouse rolls over
	$("li.navLi").mouseover(function(){
		$(this).stop().animate({height:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'});
	});
	
	//When mouse is removed
	$("li.navLi").mouseout(function(){
		$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'});
	});

	// special home
		$("li.navHome").mouseover(function(){
		$(this).stop().animate({height:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'});
	});
	// special contact
	$("li.navContact").mouseover(function(){
	$(this).stop().animate({height:'150px',width:'150px'},{queue:false, duration:600, easing: 'easeOutBounce'});
	});
	$("li.navContact").mouseout(function(){
		$(this).stop().animate({height:'50px',width:'100px'},{queue:false, duration:600, easing: 'easeOutBounce'});
	});

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// init imagesloaded
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
	});

});

