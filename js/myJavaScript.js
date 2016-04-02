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
    
});