$(function () {
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var scry = $(window).scrollTop();
      var winh = $(window).height();
      var t = $('.door-container').offset().top;
      var h = $('.door-container').innerHeight();
      var deg = 180 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.4;

      if (deg < 0) deg = 0;
      $('.door.left').css({ transform: `rotateY(-${deg}deg)` });
      $('.door.right').css({ transform: `rotateY(${deg}deg)` });
      //code end
      isStartMotion = true;
    }); //requestAnimationFrame
  }; //scrollMotion
  scrollMotion();
  $(window)
    .scroll(function () {
      scrollMotion();
    })
    .resize(function () {
      scrollMotion();
    });

  $('.btns button').click(function () {
    $('.cube').removeClass('front back right left top bottom');
    $('.cube').addClass($(this).val());
  });
}); //ready
