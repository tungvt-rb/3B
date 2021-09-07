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

		$('.filter-control li a').each(function(index) {
			var t = $(this);
			t.click(function(e) {
				var tab = t.data('tab');
				$('.filter').removeClass('active');
				console.log(tab);
				$('.'+tab).addClass('active');
			});
		});

	});
})(jQuery);