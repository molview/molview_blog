// Copyright (c) 2015, Herman Bergwerf. All rights reserved.
// Use of this source code is governed by a GFDL-1.3-style license
// that can be found in the LICENSE file.

/* global $ */

$(document).on('ready', function () {
  $('.posts .post').addClass('ripple').data('ripple-color', '#bdbdbd')
  $('.ripple').on('mousedown', function (event) {
    event.preventDefault()

    $('.ripple .ripple-effect').remove()

    var $div = $('<div/>')
    var btnOffset = $(this).offset()
    var xPos = event.pageX - btnOffset.left
    var yPos = event.pageY - btnOffset.top

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
