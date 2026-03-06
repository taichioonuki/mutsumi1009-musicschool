//  --- ハンバーガーメニュー ---
$(function () {
  const $hamburger   = $('.c-hamburger');
  const $navSp       = $('.p-header__nav-sp');
 
  const $spLinks     = $('.p-header__nav-sp a');
  const $toTopBtn    = $('.js-to-top');  

  function toggleMenu() {
    $hamburger.toggleClass('is-open');
    $navSp.toggleClass('is-open');
  //   $hamburgerBg.toggleClass('is-open');

    if ($toTopBtn.length) {
      $toTopBtn.toggleClass('is-hidden-temp');
    }
  }
    /*：閉じる関数 */
  function closeHamburger() {
    $hamburger.removeClass('is-open');
    $navSp.removeClass('is-open');

    if ($toTopBtn.length) {
      $toTopBtn.removeClass('is-hidden-temp');
    }
  }


  $hamburger.on('click', toggleMenu);
  // $hamburgerBg.on('click',closeHamburger);
  $spLinks.on('click', closeHamburger);
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