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

		var customSlb2 = $('.custom-slb-2');
		if (customSlb2.length) {
			$('.custom-slb-2').each(function(index) {
				var t = $(this);
				t.click(function(e) {
					t.children('.options').toggleClass('shown');
					t.toggleClass('open');
				});

				var opt = $(this).children('.options').children('.option');
				opt.click(function() {
					t.children('#selected').html($(this).html());
					opt.removeClass('same-active');
					$(this).addClass('same-active');
				});
			});
		}

	});
})(jQuery);