// --- ハンバーガーメニュー ---
$(function () {
  const $hamburger = $('#js-hamburger');
  const $nav = $('#js-navigation');
  const $navLinks = $('#js-navigation a');
  const $toTopBtn = $('.js-to-top');

  function toggleMenu() {
    if (window.innerWidth > 767) return;

    $hamburger.toggleClass('is-open');
    $nav.toggleClass('is-open');

    const isOpen = $hamburger.hasClass('is-open');
    $hamburger.attr('aria-expanded', isOpen);

    if ($toTopBtn.length) {
      $toTopBtn.toggleClass('is-hidden-temp');
    }
  }

  function closeHamburger() {
    $hamburger.removeClass('is-open');
    $nav.removeClass('is-open');
    $hamburger.attr('aria-expanded', 'false');

    if ($toTopBtn.length) {
      $toTopBtn.removeClass('is-hidden-temp');
    }
  }

  $hamburger.on('click', toggleMenu);
  $navLinks.on('click', closeHamburger);

  $(window).on('resize', function () {
    if (window.innerWidth > 767) {
      closeHamburger();
    }
  });
});
$(function () {
  // 1.（トップ戻る＆お問合せボタンの親要素）を取得
  const $fixedButtons = $('.js-fixed-buttons');

  // 2. 出し入れの判定関数
  function toggleFixedButtons() {
    const scrollY = $(window).scrollTop();
    const threshold = 100; // 100px以上スクロールしたら表示

    if (scrollY > threshold) {
      $fixedButtons.addClass('is-show'); // 表示用のクラスをつける
    } else {
      $fixedButtons.removeClass('is-show'); // 消す
    }
  }

  // 3. スクロール・リサイズ・読み込み時に実行
  $(window).on('scroll resize load', toggleFixedButtons);

  // 4. 初回実行（一番上でリロードした時に確実に消すため）
  toggleFixedButtons();

  // 5. TOPへ戻るボタン単体のクリック処理
  $('.js-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
  });
});

// --- フッター手前でストップさせる処理 ---
$(window).on("scroll resize load", function () {
  const $fixedButtons = $(".js-fixed-buttons");
  const $footer = $(".l-footer");

  if (!$fixedButtons.length || !$footer.length) return;

  const scrollHeight = $(document).height();
  const scrollPosition = $(window).height() + $(window).scrollTop();
  const footHeight = $footer.innerHeight();

  let baseBottom = 0;
  let stopExtra = 0;

  // お問い合わせページだけ少し浮かせる
  if ($fixedButtons.hasClass("is-contact-page")) {
    baseBottom = window.innerWidth <= 767 ? 20 : 31;
    stopExtra = window.innerWidth <= 767 ? 20 : 31;
  }

  if (scrollHeight - scrollPosition <= footHeight) {
    $fixedButtons.css({
      position: "absolute",
      bottom: footHeight + stopExtra + "px",
      top: "auto",
    });
  } else {
    $fixedButtons.css({
      position: "fixed",
      bottom: baseBottom + "px",
      top: "auto",
    });
  }
});