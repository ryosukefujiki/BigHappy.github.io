$(document).ready(function() {
  $('.header__button').on('click', function() {
     $('.header__button').toggleClass('active');
     $('.overlay').toggleClass('open');
  });

    $('.swiper-slide').bind({
    /* タッチの開始、マウスボタンを押したとき */
    'touchstart mousedown': function(e) {
      console.log(e);
      $( this ).addClass( 'hover' );
      this.touched = true;
    },
    'touchmove mousemove': function(e) {
      console.log(e)
    },
    'touchend mouseup': function(e) {
      if (!this.touched) {
          return;

}
      this.touched = false;
      console.log(e);
      $( this ).removeClass( 'hover' );
    }
    });


});
