var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      // slidesPerGroup: false;
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      autoplay: {
        delay: 3000,
        stopOnLast: false,
        disableOnInteraction: false
      },


});
