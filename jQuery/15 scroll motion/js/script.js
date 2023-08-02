$(function () {
  var fnScrollMotion = function () {
    var scry = $(window).scrollTop();
    var winh = $(window).height();
    // var offt = $('.ex1').offset().top;
    // var ex1h = $('.ex1').height();

    // $('.ex1').each(function () {

    // });
    $('.ex1').each(function () {
      var offt = $(this).offset().top;
      var ex1h = $(this).height();
      if (scry <= offt - winh * 0.4 || scry >= offt - winh * 0.4 + ex1h) {
        $(this).removeClass('active');
      } else if (scry >= offt - winh * 0.4) {
        $(this).addClass('active');
      }
    });

    console.log(scry);
  }; //fnScrollMotion

  $(window).scroll(function () {
    fnScrollMotion();
  }); //scroll

  $(window).resize(function () {
    fnScrollMotion();
  }); //scroll
}); //ready
