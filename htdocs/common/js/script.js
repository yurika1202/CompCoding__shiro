// ふわっと表示（タイトルなど）
// ----------------------------------------------------------------
$(function () {
  $('.js_fadein').on('inview', function () {
    $(this).addClass('is_fadeIn');
  });
});

// iOSのバグ対策
// --------------------------------------------------------------
(function ($) {
  // 1回のタップでリンクが開けない問題への対応
  var $w = $(window), $target = $('a');
  $target.on('touchstart', function () {
    var $this = $(this), isScrolling = false;
    $w.on('scroll', function () {
      isScrolling = true;
    });
    $this.on('touchend', function () {
      if (!isScrolling) {
        var url = $this.find('a').attr('href');
        if (url) {
          window.location.href = url;
        }
      }
      isScrolling = false;
      $this.off('touchend');
    });
  });
})(jQuery);

//iosの戻るボタン問題
// ----------------------------------------------------------------
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};

// ページ内リンクへスムーズに動くボタン
// --------------------------------------------------------------
$(function () {
  var headerHight = 70;
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 1200, "easeOutQuart");
    return false;
  });
});

function scrollToggleClass(rangeTarget, addTarget, classname) {
  if ($(rangeTarget).length) {
    scroll = $(window).scrollTop();
    startPos = $(rangeTarget).offset().top - 82;
    endPos = startPos + $(rangeTarget).outerHeight() - 82;
    if (scroll > startPos && scroll < endPos) {
      $(addTarget).addClass(classname);
    } else {
      $(addTarget).removeClass(classname)
    }
  }
}


// pagetop
// --------------------------------------------------------------
$(function () {
  var topBtn = $('.js_pageTop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.addClass('is_pageTop');
    } else {
      topBtn.removeClass('is_pageTop');
    }
  });
});


// 360px 未満は JS で viewport を固定する
// --------------------------------------------------------------
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();

//グローバルナビ ハンバーガーメニュー
// --------------------------------------------------------------

$(function () {
  $('.js_humbergerBtn').click(function () {
    $(this).toggleClass('is_humbergerOpen');
    $('.ly_header , .js_humbergerBg , .js_navOpen').toggleClass('is_humbergerOpen');
  })
  $('.js_humbergerBg').click(function () {
    $('.js_humbergerBtn').removeClass('is_humbergerOpen');
    $('.ly_header , .js_humbergerBg , .js_navOpen').removeClass('is_humbergerOpen');
  });
})