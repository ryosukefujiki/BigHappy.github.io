$(document).ready(function() {
  $('.header__button').on('click', function() {
     $('.header__button').toggleClass('active');
     $('.overlay').toggleClass('open');
  });

  $('.swiper-slide')
      .bind( 'touchstart', function(){
        $( this ).addClass( 'hover' );
    }).bind( 'touchend', function(){
        $( this ).removeClass( 'hover' );
    });
});
