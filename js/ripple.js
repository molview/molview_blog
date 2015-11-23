/* global $ */

$(document).on('ready', function () {
  $('.posts .post').addClass('ripple').data('ripple-color', '#bdbdbd')
  $('.ripple').on('mousedown', function (event) {
    event.preventDefault()

    $('.ripple .ripple-effect').remove()

    var $div = $('<div/>'),
      btnOffset = $(this).offset(),
      xPos = event.pageX - btnOffset.left,
      yPos = event.pageY - btnOffset.top

    $div.addClass('ripple-effect')
    var $ripple = $('.ripple-effect')

    $ripple.css('height', $(this).height())
    $ripple.css('width', $(this).height())
    $div.css({
      top: yPos - ($ripple.height() / 2),
      left: xPos - ($ripple.width() / 2),
      background: $(this).data('ripple-color')
    }).prependTo($(this))
  })
  $('.ripple').on('mouseup mouseout', function (event) {
    var $ripples = $('.ripple .ripple-effect')
    $ripples.addClass('out')
    window.setTimeout(function () {
      $ripples.remove()
    }, 300)
  })
  $('.ripple').on('mouseup', function (event) {
    // Fix hyperlink issue in Firefox
    var href = $(this).children('a').attr('href')
    if (href !== '') {
      window.setTimeout(function () {
        window.location = href
      }, 100)
    }
  })
})
