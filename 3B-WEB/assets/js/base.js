(function($){
	$(function(){
		$('.search-control .form-control').focus(function(){
			if( ! $('.search-store-block, .search-product-block').hasClass('active') ) {
				$('.advance-search').addClass('active');
			}
		});
		$('.search-store').click(function() {
			$('.advance-search').removeClass('active');
			$('.search-store-block').addClass('active');
		});
		$('.search-product').click(function() {
			$('.advance-search').removeClass('active');
			$('.search-product-block').addClass('active');
		});

		$(document).mouseup(function(e) {
			var container = $('.search-control');
			if (!container.is(e.target) && container.has(e.target).length === 0){
				$('.advance-search, .search-store-block, .search-product-block').removeClass('active');
			}
		});

		var starDisable = $('.rating-group.disable-hover');
		if( starDisable.length ) {
			$('.rating-group.disable-hover .rating-input').attr('disabled', 'disabled');
		}

		var owl = $('.brands');
		if (owl.length) {
			owl.owlCarousel({
				margin				: 12,
				autoplay			: true,
				autoplayTimeout		: 5000,
				loop				: true,
				responsive		: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 6
					}
				}
			});
		}

		var owl1 = $('.owl-carousel.promote');
		if (owl1.length) {
			owl1.owlCarousel({
				margin				: 20,
				autoplay			: true,
				autoplayTimeout		: 5000,
				loop				: true,
				nav					: true,
				responsive		: {
					0: {
						items: 1
					},
					600: {
						items: 3
					},
					1000: {
						items: 5
					}
				}
			});
		}

		var owl2 = $('.owl-carousel.slider');
		if (owl2.length) {
			owl2.owlCarousel({
				items				: 1,
				animateOut			: 'fadeOut',
				loop				: true,
				margin				: 10,
			});
		}

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

		var chatbox_toggle = $('.chatbox-top');
		if (chatbox_toggle.length) {
			$(chatbox_toggle).click(function() {
				$(this).closest('.chatbox-holder').toggleClass('chatbox-on');
			});
		}

		var x, i, j, selElmnt, a, b, c;
		/* Look for any elements with the class "custom-select": */
		x = document.getElementsByClassName("custom-slb");
		for (i = 0; i < x.length; i++) {
			selElmnt = x[i].getElementsByTagName("select")[0];
			/* For each element, create a new DIV that will act as the selected item: */
			a = document.createElement("DIV");
			a.setAttribute("class", "select-selected");
			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			x[i].appendChild(a);
			/* For each element, create a new DIV that will contain the option list: */
			b = document.createElement("DIV");
			b.setAttribute("class", "select-items select-hide");
			for (j = 0; j < selElmnt.length; j++) {
				/* For each option in the original select element,
				create a new DIV that will act as an option item: */
				c = document.createElement("DIV");
				c.innerHTML = selElmnt.options[j].innerHTML;
				c.addEventListener("click", function(e) {
					/* When an item is clicked, update the original select box,
					and the selected item: */
					var y, i, k, s, h;
					s = this.parentNode.parentNode.getElementsByTagName("select")[0];
					h = this.parentNode.previousSibling;
					for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
						}
					}
					h.click();
				});
				b.appendChild(c);
			}
			x[i].appendChild(b);
			a.addEventListener("click", function(e) {
				/* When the select box is clicked, close any other select boxes,
				and open/close the current select box: */
				e.stopPropagation();
				closeAllSelect(this);
				this.nextSibling.classList.toggle("select-hide");
				this.classList.toggle("select-arrow-active");
			});
		}

		function closeAllSelect(elmnt) {
			/* A function that will close all select boxes in the document,
			except the current select box: */
			var x, y, i, arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
			for (i = 0; i < y.length; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove("select-arrow-active");
				}
			}
			for (i = 0; i < x.length; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add("select-hide");
				}
			}
		}

		/* If the user clicks anywhere outside the select box,
		then close all select boxes: */
		document.addEventListener("click", closeAllSelect);

	});
})(jQuery);