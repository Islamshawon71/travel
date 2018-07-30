

/* Theme JS */
function roadtip(element) {
	var tipText = element.html();
	element.bind('mouseover', function(){
		if($('.roadtip').length == 0) {
			element.before('<span class="roadtip">'+tipText+'</span>');
			
			var tipWidth = $('.roadtip').outerWidth();
			var tipPush = -(tipWidth/2 - element.outerWidth()/2);
			$('.roadtip').css('margin-left', tipPush);
		}
	});
	element.bind('mouseleave', function(){
		$('.roadtip').remove();
	});
}


/* Theme JS */
(function ($) {
    "use strict";

	$(document).ready(function(){

        //Mobile Menu
        var mobileMenuWrapper = $('.mobile-menu-container');
        mobileMenuWrapper.find('.menu-item-has-children').each(function() {
            var linkItem = $(this).find('a').first();
            linkItem.after('<i class="fa fa-plus"></i>');
        });
        //calculate the init height of menu
        var totalMenuLevelFirst = $('.mobile-menu-container > ul.nav-menu > li').length;
        var mobileMenuH = totalMenuLevelFirst * 40 + 10; //40 is height of one item, 10 is padding-top + padding-bottom;

        $('.mbmenu-toggler').on('click', function(event){
            if (mobileMenuWrapper.hasClass('open')) {
                mobileMenuWrapper.removeClass('open');
                mobileMenuWrapper.animate({
                    'height': 0
                }, 'fast');
            } else {
                mobileMenuWrapper.addClass('open');
                mobileMenuWrapper.animate({
                    'height': mobileMenuH
                }, 'fast');
            }
        });
        //set the height of all li.menu-item-has-children items
        $('.mobile-menu-container li.menu-item-has-children').each(function() {
            $(this).css({
                'height': 40,
                'overflow': 'hidden'
            });
        });
        //process the parent items
        $('.mobile-menu-container li.menu-item-has-children').each(function() {
            var parentLi = $(this);
            var dropdownUl = parentLi.find('ul.sub-menu').first();

            parentLi.find('.fa').first().bind('click', function() {
                //set height is auto for all parents dropdown
                parentLi.parents('li.menu-item-has-children').css('height', 'auto');
                //set height is auto for menu wrapper
                mobileMenuWrapper.css({
                    'height': 'auto'
                });

                var dropdownUlheight = dropdownUl.outerHeight() + 40;

                if (parentLi.hasClass('opensubmenu')) {
                    parentLi.removeClass('opensubmenu');
                    parentLi.animate({
                        'height': 40
                    }, 'fast', function() {
                        //calculate new height of menu wrapper
                        mobileMenuH = mobileMenuWrapper.outerHeight();
                    });
                    parentLi.find('.fa').first().removeClass('fa-minus');
                    parentLi.find('.fa').first().addClass('fa-plus');
                } else {
                    parentLi.addClass('opensubmenu');
                    parentLi.animate({
                        'height': dropdownUlheight
                    }, 'fast', function() {
                        //calculate new height of menu wrapper
                        mobileMenuH = mobileMenuWrapper.outerHeight();
                    });
                    parentLi.find('.fa').first().addClass('fa-minus');
                    parentLi.find('.fa').first().removeClass('fa-plus');
                }

            });
        });

        //Mini Cart
        $('.widget_shopping_cart').bind('mouseover', function() {
            if ($(window).width() > 1024) {
                $('.mini_cart_content').addClass('open');
                $('.cart-toggler').addClass('open');
            }
        });
        $('.widget_shopping_cart').bind('mouseleave', function() {
            if ($(window).width() > 1024) {
                $('.mini_cart_content').removeClass('open');
                $('.cart-toggler').removeClass('open');
            }
        });
        //For tablet & mobile
        $('.widget_shopping_cart').bind('click', function() {
            if ($(window).width() < 1025) {
                if ($('.mini_cart_content').hasClass('open')) {
                    $('.mini_cart_content').removeClass('open');
                    $('.cart-toggler').removeClass('open');
                } else {
                    $('.mini_cart_content').addClass('open');
                    $('.cart-toggler').addClass('open');
                }
            }
        });
		
		//Tooltip
		$('.yith-wcwl-add-to-wishlist a').each(function(){
			roadtip($(this));
		});
		$('.compare-button a').each(function(){
			roadtip($(this));
		});
		$('.add-to-cart a').each(function(){
			roadtip($(this));
		});
		$('.detail-link.quickview .fa').each(function(){
			roadtip($(this));
		})

        //Brand logos carousel
        $('.brands-carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            speed: 2000,
            easing: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Product widgets carousel
        $('.home-products .shop-products').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
            autoplay: false
        });


        $('#latest_blog_post').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 2000,
            easing: 'linear',
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Products carousel layout 2
        $('.products-carousel .shop-products').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });



        //layout 4
        $('.latest-posts.layout4 .posts-carousel').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 2000,
            easing: 'linear',
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Testimonials carousel
        $('.testimonials-list').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 2000,
            easing: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Cross-sells Products carousel
        $('.cross-carousel .shop-products').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear'
        });

        //Image zoom
        $('.zoom_in_marker').on('click', function(){
            $.fancybox({
                href: $('.woocommerce-main-image').attr('href'),
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        });

        //Upsells Products carousel
        $('.upsells.products .shop-products').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Related Products carousel
        $('.related.products .shop-products').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
        });

        //Projects carousel
        $('.our-projects #projects_list').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 700,
            easing: 'linear',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        //Category view mode
        $('.view-mode').each(function() {
            $(this).find('.grid').on('click', function(event){
                event.preventDefault();

                $('.view-mode').find('.grid').addClass('active');
                $('.view-mode').find('.list').removeClass('active');

                $('.shop-products').removeClass('list-view');
                $('.shop-products').addClass('grid-view');

                $('.list-col4').removeClass('col-xs-12 col-sm-3');
                $('.list-col8').removeClass('col-xs-12 col-sm-9');
            });
            $(this).find('.list').on('click', function(event){
                event.preventDefault();

                $('.view-mode').find('.list').addClass('active');
                $('.view-mode').find('.grid').removeClass('active');

                $('.shop-products').addClass('list-view');
                $('.shop-products').removeClass('grid-view');

                $('.list-col4').addClass('col-xs-12 col-sm-3');
                $('.list-col8').addClass('col-xs-12 col-sm-9');
            });
        });
		
		//Fancy box
		$(".fancybox").fancybox({
			openEffect: 'elastic',
			closeEffect: 'fade',
			beforeShow: function () {
				if (this.title) {
					// New line
					this.title += '<div class="fancybox-social">';
					
					// Add tweet button
					this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';
					
					// Add FaceBook like button
					this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe></div>';
				}
			},
			afterShow: function() {
				// Render tweet button
				twttr.widgets.load();
			},
			helpers:  {
				title : {
					type : 'inside'
				},
				overlay : {
					showEarly : false
				}
			}
		});
		
		//Fancy box for single project
		$(".prfancybox").fancybox({
			openEffect: 'fade',
			closeEffect: 'elastic',
			nextEffect: 'fade',
			prevEffect: 'fade',
			beforeShow: function () {
				if (this.title) {
					// New line
					this.title += '<div class="fancybox-social">';
					
					// Add tweet button
					this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';
					
					// Add FaceBook like button
					this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe></div>';
				}
			},
			afterShow: function() {
				// Render tweet button
				twttr.widgets.load();
			},
			helpers:  {
				title : {
					type : 'inside'
				},
				overlay : {
					showEarly : false
				},
				buttons	: {},
				thumbs	: {
					width	: 100,
					height	: 100
				}
			}
		});
		
		//push recent posts & recent comments into tabs
		$('.roadtabs li').each(function(){
			$(this).on('click', function(){
				var tabRel = $(this).attr('rel');
				
				$('.roadtabs .tab').removeClass('active');
				$(this).addClass('active');
				
				$('.widget_road_widgets').removeClass('active');
				$('#'+tabRel).addClass('active');
				
				$('.panel').removeClass('active');
				$('#'+tabRel).addClass('active');
			});
		});

        //Go to top
        $('#back-top').on('click', function(){
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });
		

		/*thumbnail click*/
		$('.quick-thumbnails a').each(function(){
			var quickThumb = $(this);
			var quickImgSrc = quickThumb.attr('href');
			
			quickThumb.on('click', function(event){
				event.preventDefault();
				
				$('.main-image').find('img').attr('src', quickImgSrc);
			});
		});
		
		/*thumbnails carousel*/
		$('.quick-thumbnails').slick({
			slidesToScroll: 1,
			slidesToShow: 4
		});
	
		//Product tabs carousel
		$('#shop-carousel-1, #shop-carousel-2, #shop-carousel-3, #shop-carousel-4').owlCarousel({
			items: 4,
			itemsDesktop: [1170, 4],
			itemsDesktopSmall: [980, 3],
			itemsTablet: [800, 3],
			itemsTabletSmall: [650, 2],
			itemsMobile: [450, 1],
			singleItem: false,
			itemsScaleUp: false,
			slideSpeed: 700,
			paginationSpeed: 800,
			autoPlay: false,
			stopOnHover: true,
			navigation: true,
			scrollPerPage: false,
			pagination: false,
			paginationNumbers: false,
			responsive: true,
			autoHeight: false,
			mouseDrag: true,
			touchDrag: false
		});

		//Revolution Slider Initialize			
		$('#rev_slider_5_1').show().revolution({
			dottedOverlay: "none",
			delay: 5000,
			startwidth: 1170,
			startheight: 510,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "right",
			navigationVAlign: "center",
			navigationHOffset: 50,
			navigationVOffset: 0,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 0,
			soloArrowLeftVOffset: 0,
			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 0,
			soloArrowRightVOffset: 0,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1500,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});
		

		$('#rev_slider_14_1').show().revolution({
			dottedOverlay: "none",
			delay: 5000,
			startwidth: 1920,
			startheight: 752,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "right",
			navigationVAlign: "center",
			navigationHOffset: 50,
			navigationVOffset: 0,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 0,
			soloArrowLeftVOffset: 0,
			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 0,
			soloArrowRightVOffset: 0,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1500,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});
		
		$('#rev_slider_15_1').show().revolution({
			dottedOverlay: "none",
			delay: 5000,
			startwidth: 1230,
			startheight: 672,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "bullet",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "center",
			navigationVAlign: "bottom",
			navigationHOffset: 0,
			navigationVOffset: 44,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 22,
			soloArrowLeftVOffset: 0,
			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 22,
			soloArrowRightVOffset: 0,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "on",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1500,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});
		
		$("#rev_slider_16_1").show().revolution({
			dottedOverlay: "none",
			delay: 7000,
			startwidth: 1170,
			startheight: 421,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "center",
			navigationVAlign: "bottom",
			navigationHOffset: 0,
			navigationVOffset: 44,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "bottom",
			soloArrowLeftHOffset: 30,
			soloArrowLeftVOffset: 30,
			soloArrowRightHalign: "left",
			soloArrowRightValign: "bottom",
			soloArrowRightHOffset: 80,
			soloArrowRightVOffset: 30,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "on",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1200,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});
		
		$("#rev_slider_17_1").show().revolution({
			dottedOverlay: "none",
			delay: 5000,
			startwidth: 1230,
			startheight: 510,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "center",
			navigationVAlign: "bottom",
			navigationHOffset: 0,
			navigationVOffset: 44,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 0,
			soloArrowLeftVOffset: 0,
			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 0,
			soloArrowRightVOffset: 0,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "on",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1200,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});
		
		$("#rev_slider_18_1").show().revolution({
			dottedOverlay: "none",
			delay: 5000,
			startwidth: 1920,
			startheight: 510,
			hideThumbs: 200,
			thumbWidth: 100,
			thumbHeight: 50,
			thumbAmount: 2,
			simplifyAll: "off",
			navigationType: "none",
			navigationArrows: "solo",
			navigationStyle: "round",
			touchenabled: "on",
			onHoverStop: "off",
			nextSlideOnWindowFocus: "off",
			swipe_threshold: 75,
			swipe_min_touches: 1,
			drag_block_vertical: false,
			keyboardNavigation: "off",
			navigationHAlign: "center",
			navigationVAlign: "bottom",
			navigationHOffset: 0,
			navigationVOffset: 44,
			soloArrowLeftHalign: "left",
			soloArrowLeftValign: "center",
			soloArrowLeftHOffset: 0,
			soloArrowLeftVOffset: 0,
			soloArrowRightHalign: "right",
			soloArrowRightValign: "center",
			soloArrowRightHOffset: 0,
			soloArrowRightVOffset: 0,
			shadow: 0,
			fullWidth: "on",
			fullScreen: "off",
			spinner: "spinner5",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "on",
			forceFullWidth: "off",
			hideTimerBar: "on",
			hideThumbsOnMobile: "off",
			hideNavDelayOnMobile: 1200,
			hideBulletsOnMobile: "off",
			hideArrowsOnMobile: "off",
			hideThumbsUnderResolution: 0,
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			startWithSlide: 0
		});	
		
		//Price Slider / UI jQuary Slider
		$( '#slider-range' ).slider({
			range: true,
			min: 18,
			max: 115,
			values: [ 18, 115 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" — $" + $( "#slider-range" ).slider( "values", 1 ) );
		
		//Checkout Page Login
		$( '.showlogin' ).on('click', function(){
		  $( '#checkoutlogin' ).toggleClass( 'checkout-login', 700, 'easeOutSine' );
		});
		
		//Checkout Page Coupon
		$( '.showcoupon' ).on('click', function(){
		  $( '#checkoutcoupon' ).toggleClass( 'checkoutcoupon', 600, 'easeOutSine' );
		});
		
		//Modal
		$('#productModal').on('shown.bs.modal');
			
	});
	
	$(window).load(function() {
		//Shuffle (blog grid layout)
		$('#shufflegrid').shuffle({
			itemSelector: '.shuffle-item'
		});

		//Projects filter with shuffle.js
		$('.list_projects #projects_list').shuffle({
			itemSelector: '.project'
		});

		$('.filter-options .btn').on('click', function() {

			var filterBtn = $(this),
				isActive = filterBtn.hasClass('active'),
				group = isActive ? 'all' : filterBtn.data('group');

			// Hide current label, show current label in title
			if (!isActive) {
				$('.filter-options .active').removeClass('active');
			}

			filterBtn.toggleClass('active');

			// Filter elements
			$('.list_projects #projects_list').shuffle('shuffle', group);
		});
	});	
	
	// Scroll
	var currentP = 0;
	$(window).scroll(function() {
		var headerH = $('.header-container').height();
		var navH = $('.nav-container').height();
		headerH += navH;
		var scrollP = $(window).scrollTop();
		if ($(window).width() > 1024) {
			if (scrollP != currentP) {
				//Back to top
				if (scrollP >= headerH) {
					$('#back-top').addClass('show');
					$('.nav-container').addClass('ontop');
				} else {
					$('#back-top').removeClass('show');
					$('.nav-container').removeClass('ontop');
				}
				currentP = $(window).scrollTop();
			}
		}
	});
	
})(jQuery);	