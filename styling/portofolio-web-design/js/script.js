// event pada link pada saat di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap element yang bersangkutan
	var elemenTujuan = $(tujuan);


	// pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 800, 'easeinOutExpo');

	e.preventDefault();
});


//parallax
//about
$(window).on('load', function() {
	$('.left').addClass('attend');
	$('.right').addClass('attend');
});



$(window).scroll(function() {
	var wScroll= $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.1 +'%)'
	});


	//portfolio
	if ( wScroll > $('.portfolio').offset().top - 220 ) {

		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {

			  $('.portfolio .thumbnail').eq(i).addClass('muncul');
				
			}, 300 * i+1);

		});

	} 


}); 