(function($) {
	$(function() {
		$('.search-control .form-control').focus(function(){
			$('.advance-search').addClass('active');
		});
		$('.search-by .close').click(function() {
			$('.advance-search').removeClass('active');
		});
		$('.by-store').click(function() {
			$(this).addClass('active');
			$('.by-product').removeClass('active');
		});
		$('.by-product').click(function() {
			$(this).addClass('active');
			$('.by-store').removeClass('active');
		});

		var slb = $('.slb');
		if (slb.length) {
			$(".slb").select2({
				width: null
			});
		}
	});
})(jQuery);