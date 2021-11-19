$(function () {
  $(document).ready(function() {
    $('.p-main__top-visual-title').fadeIn(2000);
  });

  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    $('#slide-menu').slideToggle(200);
  })
});