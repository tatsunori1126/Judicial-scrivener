$(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
      $('#slide-menu').slideToggle(200);
    })
});