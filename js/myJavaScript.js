$(document).ready(function() {
	
	$('#filterButtons li').click(function(e) {
		var catFilter= $(this).attr('data-filter');
        $('ul#filterButtons li.current').removeClass('current');
        $(this).addClass('current');
 		$('ul#thumbnails li').each(function() {
    		if($(this).hasClass(catFilter)) {
      			$(this).fadeIn('slow').removeClass('hidden');
    		} else {
				$(this).fadeOut('normal').addClass('hidden');
      			
    		}
		});
         e.preventDefault();
	});
   
     $('#courseInfo a').click(function(e) {
		var courseFilter= $(this).attr('data-filter');
         $('#courseInfo a.current').removeClass('current');
        $(this).addClass('current');
        $('#courseInfo div.current').removeClass('current');
         $(this).parent().parent().addClass('current');
         $('div#courses div').each(function() {
    		if($(this).hasClass(courseFilter)) {
      			$(this).fadeIn('slow').removeClass('hidden');
    		} else {
				$(this).fadeOut('normal').addClass('hidden');
      			
    		}
		});
         e.preventDefault();
	});
    $('#navButtons li').click(function(e) {
		$('#navButtons li.active').removeClass('active');
        $(this).addClass('active');    
	});
    $('#indexLinks img').hover(function(){
        var w=$(this).width();
        var imageH=$(this).height();
			$(this).animate({width:w+25,height:imageH+25},'2000');
		},function(){
			$(this).animate({width:'150px',height:'150px'},'2000');
	});
});