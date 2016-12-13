$(function() {

	// Плавный скролл по якорям
	$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $(el).offset().top}, 3500);
        return false; 
	});	

	// gallery magnific popup
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$('#say-about-slider').owlCarousel({
		items:1,
		loop:true, //Зацикливаем слайдер
		margin:10, //Отступ от картино если выводите больше 1		
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000, //Время смены слайда
		autoHeight:true, //высота автоматически, каждого слайда
		responsive:{ //Адаптация в зависимости от разрешения экрана

			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	var burger = document.querySelector('.burger-container'),
	        header = document.querySelector('.header');
	    
	    burger.onclick = function() {
	        header.classList.toggle('menu-opened');
	    
	};

	$('#main-form').validate ();
	$('#main-form-1').validate ();
	$('#main-form-2').validate ();
	$('#main-form-3').validate ();
	$('#main-form-4').validate ();

	$("#phone").inputmask("+7 ( 999 ) 999 - 99 - 99");
	$("#phone-1").inputmask("+7 ( 999 ) 999 - 99 - 99");
	$("#phone-2").inputmask("+7 ( 999 ) 999 - 99 - 99");
	$("#phone-3").inputmask("+7 ( 999 ) 999 - 99 - 99");
	$("#phone-4").inputmask("+7 ( 999 ) 999 - 99 - 99");

	$(window).on('load', function () {
        var $preloader = $('.preloader-wrap'),
        $spinner   = $preloader.find('#fountainTextG');
        $spinner.fadeOut();
        $preloader.delay(300).fadeOut('slow');
    });

});
