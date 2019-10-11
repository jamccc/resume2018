!function () {
  var view = document.querySelector('#mySlides')
  view.style.border = "1px solid red"

  var controller = function (view) {
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
  controller(view)

}.call()
