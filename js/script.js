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
  const scrollHeight = $(document).height();
  const scrollPosition = $(window).height() + $(window).scrollTop();


  const $footer = $(".l-footer");
  const footHeight = $footer.length ? $footer.innerHeight() : 0;

  if (scrollHeight - scrollPosition <= footHeight) {
    // フッター手前に来たら position を absolute に変更
    $fixedButtons.css({
      position: "absolute",
      bottom: footHeight,
    });
  } else {
    // それ以外は元の fixed に戻す
    $fixedButtons.css({
      position: "fixed",
      bottom: "0",
    });
  }
});