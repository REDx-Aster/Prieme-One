$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  let headerMenu = $('.header-menu');
  let headerLang = $('.header-top-lang');
  if (w <= 768) {
    if (!headerLang.hasClass('done')) {
      headerLang.addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerLang.hasClass('done')) {
      headerLang.removeClass('done').prependTo($('.header-top'));
    }
  }
  if (w <= 768) {
    if (!$('.header-bottom-menu').hasClass('done')) {
      $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
    }
  } else {
    $.each($('.header-bottom-menu'), function () {
      if ($(this).hasClass('header-bottom-menu--right')) {
        if ($(this).hasClass('done')) {
          $(this)
            .removeClass('done')
            .prependTo($('.header-bottom__column').eq(2));
        }
      } else {
        if ($(this).hasClass('done')) {
          $(this)
            .removeClass('done')
            .prependTo($('.header-bottom__column').eq(0));
        }
      }
    });
  }
}
function adaptive_function() {
  let w = $(window).outerWidth();
  let h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();
