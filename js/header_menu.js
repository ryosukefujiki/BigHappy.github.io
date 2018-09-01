$(document).ready(function() {
  $('.header__button').on('click', function() {
     $('.header__button').toggleClass('active');
     $('.overlay').toggleClass('open');
  });

  $('.swiper-slide')
      .bind( 'touchstart', function(){
        console.log("タッチしたよ");
        $( this ).addClass( 'hover' );
    }).bind( 'touchend', function(){
        console.log("手を離した");
        $( this ).removeClass( 'hover' );
    }).bind( 'touchmove', function(){
        console.log("動いたよ");
    });
});
