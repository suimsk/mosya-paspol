$(function () {
  // スライドショー
  $(window).load(function () {
    $('.flexslider').flexslider({
      controlNav: false,
      directionNav: false,
      slideshow: true,
      slideSpeedspeed: 100,
      animation: "fade",
      animationSpeed: 3000,
      animationLoop: true
    });

    // ページジャンプの処理
    $("#page-top a").click(function () {
      $('html,body').animate({ scrollTop: 0 }, 500, 'swing');
      return false;
    });
    
    // ハンバーガーメニュー
    $('#slidemenu-btn').on('click', function () {
      $('.globalnav').slideToggle();
    })
  });
});


