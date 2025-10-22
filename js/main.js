function playMusic() {
	document.getElementById('player').paused ? document.getElementById('player').play() : document.getElementById('player').pause();
	$('.music-notice').fadeIn();
}

jQuery(document).ready(function() {

	$('.full-height').height($(window).height());
	$('.full-section').height($(window).height());
	$('.full-plus-10').height($(window).height()+($(window).height()*.2));
	$('.full-plus-20').height($(window).height()+($(window).height()*.4));
	$('.panel').width($(window).width());

	//$("img").unveil(300);

	// $(window).scroll(function (event) {

	//    var el             = $('.breakdown'),
 //           offset         = el.offset(),
 //           scrollTop      = $(window).scrollTop(),
 //           floatingHeader = $(".jimmie-title");
       
 //       if ((scrollTop > (offset.top - 80)) && (scrollTop < offset.top + el.height())) {
 //           floatingHeader.fadeIn();
 //       } else {
 //           floatingHeader.fadeOut();   
 //       }

 //       var el2             = $('.prentice-breakdown'),
 //           offset2         = el2.offset(),
 //           scrollTop2      = $(window).scrollTop(),
 //           floatingHeader2 = $(".prentice-title");
       
 //       if ((scrollTop2 > offset2.top) && (scrollTop < offset2.top + (el2.height()*.7))) {
 //           floatingHeader2.fadeIn();
 //       } else {
 //           floatingHeader2.fadeOut();   
 //       }


	// });

	$('.dream-copy').matchHeight();

  // $(window).scroll(function (event) {

  //    var el             = $('.autovideo'),
  //          offset         = el.offset(),
  //          scrollTop      = $(window).scrollTop()

  //          console.log(scrollTop);
           
       
  //      if (scrollTop > 2300) && (scrollTop > 5000) {
  //          $(".autovideo").html(
  //           '<video autoplay loop class="bgvid">' +

  //        '<source src="video/stock-footage-surgeon-turns-on-light-in-hospital-room-edit.mp4" type="video/mp4">'  +

  //        '</video>');
  //      } 

  //      });

});