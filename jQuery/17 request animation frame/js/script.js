$(function () {
  var x = 0;
  $('.ex1 .right').click(function () {
    x += 10;
    $('.ex1 .box').css({ left: x });
  }); //click

  var move = function () {
    x += 10;
    $('.ex1 .box').css({ left: x });

    requestAnimationFrame(function () {
      move();
    });
    //requestAnimationFrame 은
    //1초에 60frame이상 반복이 되지 않는다.
  };

  move();
}); //ready

$(function () {
  var rafId;
  var isMotionStart = true;

  var fnScrollMotion = function () {
    if (!isMotionStart) return; //시작이 불가능이면 정지
    isMotionStart = false; //시작 = 불가능
    rafId = requestAnimationFrame(function () {
      //컴퓨터 성능에 따라서 알아서 처리
      console.log('고비용 모션');
      isMotionStart = true;
    });
  };

  fnScrollMotion();

  $(window)
    .scroll(function () {
      fnScrollMotion();
    })
    .resize(function () {
      fnScrollMotion();
    });
}); //ready
