
// 生徒さんたちの声
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.p-top-voice__slider', {
    type: 'loop',
    perPage: 3,      // PCでは3枚
    gap: '3.5rem',
    arrows: true,
    pagination: true,
    speed: 1200,        // スライドが動く速さ
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',

    breakpoints: {
      767: {
        perPage: 1,  // spでは1枚
        gap: '1rem',
      },
    },
  }).mount();
});

// よくあるご質問
$(function () {
  $(".p-faq__answer").hide();

  $(".p-faq__question, .p-faq__answer").on("click", function () {
    const $targetAnswer = $(this).hasClass("p-faq__answer") ? $(this) : $(this).next(".p-faq__answer");
    const $targetQuestion = $(this).hasClass("p-faq__question") ? $(this) : $(this).prev(".p-faq__question");

    $targetQuestion.toggleClass("is-open"); 
    $targetAnswer.slideToggle(300);
    });
  });





