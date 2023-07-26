$(function () {
  var num = 1;
  return num++;
});

$(function () {
  var fnSetNum = function (q) {
    var num1 = Math.floor(Math.random() * 10);
    $(`.ex3 .q${q} .num1`).val(num1);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex3 .q${q} .num2`).val(num2);
  };

  fnSetNum(1);
  fnSetNum(2);
  fnSetNum(3);

  var fnCheck = function (n) {
    var num1 = parseInt($(`.ex3 .q${n} .num1`).val());
    var num2 = parseInt($(`.ex3 .q${n} .num2`).val());
    var num3 = parseInt($(`.ex3 .q${n} .num3`).val());
    console.log(num1);
    return num1 + num2 === num3 ? 1 : 0;
  };

  $('.ex3').submit(function (e) {
    e.preventDefault();
    // var result = fnCheck(1) + fnCheck(2) + fnCheck(3);
    var result = 0;
    result += fnCheck(1);
    result += fnCheck(2);
    result += fnCheck(3);
    console.log(fnCheck(1));
    $('.ex3 .result').text(result);
  });
});

$(function () {
  var num = 1;
  var n = 0;
  $('.ex4 .btn1').click(function (e) {
    e.preventDefault();
    num += ++n;
    $('.ex4 .result').append(` ${num}`);
  }); //click
  $('.ex4 .btn2').click(function () {
    $('.ex4 .result').val() === 1;
  });
}); //ready

$(function () {
  var num = 1;
  $('.ex5 .increase').click(function () {
    num++;
    // if (num > 5) {
    //   num = 5;
    // }
    num = num > 5 ? 5 : num;
    $('.ex5 .result').text(num);
  });
  $('.ex5 .decrease').click(function () {
    num--;
    if (num < 1) {
      num = 1;
    }
    $('.ex5 .result').text(num);
  });
});

$(function () {
  var num = 1;
  $('.ex6 .increase').click(function () {
    num++;
    if (num > 5) {
      num = 1;
    }
    $('.ex6 .result').text(num);
  });
});

$(function () {
  var n = 1;
  var carousel = function () {
    if (n > 5) n = 1; // 증가할 때 조건
    if (n < 1) n = 5; // 감소할 때 조건
    $('img').stop().fadeOut();
    $(`.img${n}`).stop().fadeIn();
    $('.btns button').removeClass('active');
    $(`.btn${n}`).addClass('active');
  };
  $('.next').click(function () {
    n++;
    carousel();
  }); // next click

  $('.prev').click(function () {
    n--;
    carousel();
  }); // prev click

  $('.btns button').click(function () {
    n = parseInt($(this).val());
    carousel();
  }); // button click
});

$(function () {
  var n = 1;
  $('.ex7 button').click(function () {
    n += parseInt($(this).val());
    $('.ex7 .result').text(n);
  });
});
