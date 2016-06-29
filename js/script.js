$(document).ready(function(){
	
	//Fix Errors - http://www.learningjquery.com/2009/01/quick-tip-prevent-animation-queue-buildup/
	
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
	
});