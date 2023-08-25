
$(document).ready(function(){
	if($('.detail-gallery').length>0){
		$('.detail-gallery').each(function(){
			var data=$(this).find(".carousel").data();
			$(this).find(".carousel").jCarouselLite({
				btnNext: ".nextMe", btnPrev: ".prevMe", 
				speed: 800,
				visible:4,
                vertical: true,
				
			});
			
			$(this).find(".carousel a").on('click',function(event) {
				event.preventDefault();
				$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
				$(this).addClass('active');
				var z_url =  $(this).find('img').attr("src");
				$(this).parents('.detail-gallery').find("#img_zoom").attr("src", z_url);
				$('.zoomWindow').css('background-image','url("'+z_url+'")');
			});
			
		});
	}
});
