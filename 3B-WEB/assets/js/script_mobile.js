(function($) {
	$(function() {
		$('.search-control .form-control').focus(function(){
			$('.advance-search').addClass('active');
		});
		$('.advance-search .close').click(function() {
			$('.search-history').show();
			$('.advance-search, .by-store, .by-product, .results').removeClass('active');
		});
		$('.by-store').click(function() {
			$(this).addClass('active');
			$('.by-product').removeClass('active');

			$('.search-history').hide();
			$('.search-store').addClass('active');
			$('.search-product').removeClass('active');
		});
		$('.by-product').click(function() {
			$(this).addClass('active');
			$('.by-store').removeClass('active');

			$('.search-history').hide();
			$('.search-store').removeClass('active');
			$('.search-product').addClass('active');
		});

		var slb = $('.slb');
		if (slb.length) {
			$(".slb").select2({
				width: null
			});
		}
	});
})(jQuery);