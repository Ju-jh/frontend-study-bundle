$(function () {
  var fnFloatBanner = function () {
    var scry = $(window).scrollTop();
    var wscry = $(window).scrollLeft();
    var winh = $(window).height();
    var winw = $(window).width();

    $('div').each(function () {});
    $('.banner1').css({
      top: scry + winh * 0.5 - 100,
      left: wscry + 10,
    });
    $('.banner2').css({
      top: scry + winh * 0.5 - 100,
      left: wscry + winw * 0.5 - 50,
    });
    $('.banner3').css({
      top: scry + winh * 0.5 - 100,
      left: wscry + winw - 110,
    });
  }; //fnFloatBanner

  fnFloatBanner();

  $(window)
    .scroll(function () {
      fnFloatBanner();
    })
    .resize(function () {
      fnFloatBanner();
    }); //window event
});
