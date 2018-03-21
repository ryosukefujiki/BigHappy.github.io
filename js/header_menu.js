$(document).ready(function() {
  $('.header__button').on('click', function() {
     $('.header__button').toggleClass('active');
     $('.overlay').toggleClass('open');
  });
});
