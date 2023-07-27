$(function () {
  var n = 1;
  var timeoutId;

  $('.ex1 button').click(function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      $('.ex1 .result').text(++n);
    }, 2000);
  }); //click
}); //ready

$(function () {
  $('.ex2 button').click(function () {
    //$('.ex2 .result').slideDown()//펼치다
    //$('.ex2 .result').slideUp()//접다
    $('.ex2 .result').stop().slideToggle();
    $(this).attr('disabled', true);
    setTimeout(function () {
      $('.ex2 button').attr('disabled', false);
    }, 300);
  }); //click
}); //ready

$(function () {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  $('.ex3 .num1').val(num1);
  $('.ex3 .num2').val(num2);

  $('.ex3 button').click(function () {
    var num1 = parseInt($('.ex3 .num1').val());
    var num2 = parseInt($('.ex3 .num2').val());
    var num3 = parseInt($('.ex3 .num3').val());
    var result;
    if (num1 + num2 === num3) {
      $('.ex3').css({ background: 'yellowgreen' });
      result = '축하합니다';
    } else {
      $('.ex3').css({ background: 'red' });
      result = '다시도전하세요';
    } //if else
    setTimeout(function () {
      alert(result);
    }, 1);
  }); //click

  $('.ex4 button').click(function () {
    $('.ex4 .box').show();
    setTimeout(function () {
      $('.ex4 .box').css({ background: 'red' });
    }, 1);
  });
}); //ready

$(function () {
  var n = 1;
  var intervalId;

  $('.ex5 .increase').click(function () {
    clearInterval(intervalId); // 스케줄러중복방지, 반복감소중지
    intervalId = setInterval(function () {
      $('.ex5 .result').text(++n);
    }, 1000);
  }); //click

  $('.ex5 .decrease').click(function () {
    clearInterval(intervalId); //스케줄러중복방지, 반복증가중지,
    intervalId = setInterval(function () {
      $('.ex5 .result').text(--n);
    }, 1000);
  }); //click
}); //ready

$(function () {
  var n = 1;
  var timeoutId;
  var intervalId;
  var fn = function (add) {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    timeoutId = setTimeout(function () {
      intervalId = setInterval(function () {
        $('.ex6 .result').text((n += add));
      }, 1000); //interval
    }, 4000); //timeout
  }; //fn

  $('.ex6 .increase').click(function () {
    fn(1);
  }); //click

  $('.ex6 .decrease').click(function () {
    fn(-1);
  }); //click
}); //ready

$(function () {
  var id;
  var isStart = false;
  var time;

  var fnRestTimer = function () {
    clearInterval(id);
    time = '0.0';
    $('.ex7 input').val('').attr('readonly', false);
    isStart = false;
    $('.ex7 button').hide();
    $('.ex7 .result').text('0.0초');
  }; //fnRestTimer

  $('.ex7').submit(function (e) {
    e.preventDefault();
    if (isStart) return; //isStart가 true이면 함수를 중지한다

    isStart = true;
    $('.ex7 button').show();
    $('.ex7 input').attr('readonly', true);
    time = parseInt($('.ex7 input').val());
    id = setInterval(function () {
      time -= 0.1;
      time = time.toFixed(1);
      if (time <= 0) {
        fnRestTimer();
      } //if
      $('.ex7 .result').text(time);
    }, 100);
  }); //submit

  $('.ex7 button').click(function () {
    fnRestTimer();
  }); //click
}); //ready

$(function () {
  var n;
  setInterval(function () {
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img1').attr('src', `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img2').attr('src', `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img3').attr('src', `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img4').attr('src', `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img5').attr('src', `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 5);
    $('.ex8 .img6').attr('src', `./img/img${n}.jpg`);
  }, 100);
}); //ready

$(function () {
  var n = 1;
  var timeoutId;
  var intervalId = setInterval(function () {
    n++;
    change();
  }, 2000);

  var autoplay = function () {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      intervalId = setInterval(function () {
        n++;
        change();
      }, 2000);
    }, 5000);
  }; //autoplay

  var change = function () {
    $('.carousel button').attr('disabled', true);
    setTimeout(function () {
      $('.carousel button').attr('disabled', false);
    }, 500);
    if (n > 5) n = 1;
    if (n < 1) n = 5;
    $(`.carousel img`).stop().fadeOut();
    $(`.carousel .img${n}`).stop().fadeIn();
    $('.btns button').removeClass('active');
    $(`.btn${n}`).addClass('active');
  }; //change

  $('.next').click(function () {
    n++;
    change();
    autoplay();
  }); //click

  $('.prev').click(function () {
    n--;
    change();
    autoplay();
  }); //click

  $('.btns button').click(function () {
    n = parseInt($(this).val());
    change();
    autoplay();
  }); //click
}); //ready
