// $(function () {
//   var fnSlider = function (ex, n) {
//     $(`.ex${ex} img`).hide();
//     //$('.ex1 .img3').show(); show라는 명령어는 jquery가 알아서 변경
//     $(`.ex${ex} .img${n}`).css({ display: 'block' });
//   }; //fnSlider

//   $('.ex1 button').click(function () {
//     var n = $(this).val();
//     fnSlider(1, n);
//   }); // ex1 click

//   $('.ex2 button').click(function () {
//     var n = $(this).val();
//     fnSlider(2, n);
//   }); // ex2 click
// }); //ready

$(function () {
  var fnSlider = function (el, ex) {
    var n = el.val();
    $(`.ex${ex} img`).hide();
    $(`.ex${ex} .img${n}`).css({ display: 'block' });
    $(`.ex${ex} button`).removeClass('active');
    el.addClass('active'); //클릭한 버튼에게 active라는 클래스명을 추가해준다.
  }; //fnSlider

  $('.ex1 button').click(function () {
    fnSlider($(this), 1);
  }); // ex1 click

  $('.ex2 button').click(function () {
    fnSlider($(this), 2);
  }); // ex2 click

  $('.ex3 button').click(function (e) {
    e.stopPropagation();
    $(this).parent().siblings('div').removeClass('active');
    $(this).parent().addClass('active');
  }); // ex3 click

  $('.ex3 .box').click(function () {
    $(this).siblings('div').children('button').removeClass('active');
    $(this).children('button').addClass('active');
  });

  $('.ex4 button').click(function () {
    // $('.ex4 button').removeClass('active');
    $(this).parent().siblings('p').children('button').removeClass('active');
    $(this).toggleClass('active');
  });
}); //ready
