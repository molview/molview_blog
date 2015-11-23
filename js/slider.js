/* global $ */

$(document).on('ready', function () {
  $('.image-slider').on('mousemove touchmove', function (e) {
    var xcoord = e.pageX ||
      e.touches[0].pageX ||
      e.changedTouches[0].pageX
    var topLayer = $(this).children('.top-layer')
    if (xcoord - topLayer.offset().left <= $(this).width()) {
      topLayer.css({
        'width': xcoord - topLayer.offset().left + $(window).scrollLeft(),
        'transition': 'none'
      })
    }
  })

  $('.image-slider').on('mouseleave', function (e) {
    var w = ''
    var ycoord = e.pageY
    var offsetTop = $(this).offset().top
    var topLayer = $(this).children('.top-layer')
    if (ycoord > offsetTop && ycoord < offsetTop + $(this).height()) {
      w = (topLayer.width() < $(this).width() / 2) ? 0 : $(this).width()
    }
    topLayer.css({
      'width': w
    })
  })

/* $('.image-slider').on('mouseleave touchend touchcancel', function(e) {
    topLayer = $(this).children('.top-layer')
    topLayer.css({
        "width": "",
        "transition": ""
    })
}); */
})
