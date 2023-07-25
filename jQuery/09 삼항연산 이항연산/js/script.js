$(function () {
  $('.ex1').submit(function (e) {
    e.preventDefault();
    var num = parseInt($('.ex1 .num').val());
    // var result;
    // if (num > 0) {
    //   result = '정답';
    // } else {
    //   result = '오답';
    // }
    // $('.result').text(result);
    //요즘 트렌드는 if문을 안쓰면 안쓸수록 좋은 것.
    var result = num > 0 ? '사실' : '거짓';
    if (num <= 0) $('.ex1 .num').val('');
    $('.ex1 .result').text(result);
  }); // ex1 submit

  $('.ex2').submit(function (e) {
    e.preventDefault();
    var num = parseFloat($('.ex2 .num').val());
    /* pasreFloat는 소숫점아래도 필요할 때 사용 */
    var result = num >= 90 ? 'A등급' : num >= 80 ? 'B등급' : 'C등급';
    $('.ex2 .result').text(result);
  }); //click

  $('.ex3').submit(function (e) {
    e.preventDefault();
    var num1 = parseFloat($('.ex3 .num1').val());
    var num2 = parseFloat($('.ex3 .num2').val());
    var oper = $('.ex3 select').val();
    if (num2 === 0 && oper === '/') {
      alert('0으로는 숫자를 나눌 수 없어요');
      return;
    }
    var result =
      oper === '+'
        ? num1 + num2
        : oper === '-'
        ? num1 - num2
        : oper === '*'
        ? num1 * num2
        : (num1 / num2).toFixed(2);

    $('.ex3 .result').text(result);
  }); //ex3 submit
}); //ready

$(function () {
  var fnSetNum = function (q) {
    var num1 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${q} .num1`).val(num1);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${q} .num2`).val(num2);
  }; //fnSetNum

  fnSetNum(1);
  fnSetNum(2);

  var fnCheckResult = function (n) {
    var num1 = parseInt($(`.ex4 .q${n} .num1`).val());
    var num2 = parseInt($(`.ex4 .q${n} .num2`).val());
    var num3 = parseInt($(`.ex4 .q${n} .num3`).val());
    return num1 + num2 === num3 ? true : false;
  }; //fnCheckResult

  $('.ex4').submit(function (e) {
    e.preventDefault();
    var result =
      fnCheckResult(1) === true && fnCheckResult(2) === true ? '정답' : '오답';
    $('.ex4 .result').text(result);
  }); //ex4 submit
}); //ready

$(function () {
  var fnSetNum = function (q) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    /* 0~9까지 숫자가 나오게 된다. */
    $(`.ex5 form:nth-of-type(${q}) input:nth-child(1)`).val(num1);
    $(`.ex5 form:nth-of-type(${q}) input:nth-child(2)`).val(num2);
  }; //fnSetNum

  fnSetNum(1); //5-1 무작위 숫자
  fnSetNum(2); //5-2 무작위 숫자

  var fnSubmit = function (evt, el) {
    evt.preventDefault();
    var num1 = parseInt(el.children('input:nth-child(1)').val());
    var num2 = parseInt(el.children('input:nth-child(2)').val());
    var num3 = parseInt(el.children('input:nth-child(3)').val());
    var result = num1 + num2 === num3 ? '정답' : '오답';
    el.children('p').text(result);
  };

  $('.ex5 form').submit(function (e) {
    // e.preventDefault();
    // var num1 = parseInt($(this).children('input:nth-child(1)').val());
    // var num2 = parseInt($(this).children('input:nth-child(2)').val());
    // var num3 = parseInt($(this).children('input:nth-child(3)').val());
    // var result = num1 + num2 === num3 ? '정답' : '오답';
    // $(this).children('p').text(result);
    fnSubmit(e, $(this));
  });

  $(function () {
    //이항연산자
    $('.ex6').submit(function (e) {
      e.preventDefault();
      var str = $('.ex6 input').val();
      // === var result = str ? '<button>버튼</button>' : '';
      var result = str && '<button>버튼</button>';
      $('.ex6 .result').html(result);
    });

    var a = 1;
    var result = a === 1 && 'a는1입니다.';
    console.log(result);
  });
});
