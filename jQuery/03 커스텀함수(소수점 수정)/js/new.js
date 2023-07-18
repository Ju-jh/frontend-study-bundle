// $(document).ready(function(){
// });
$(function () {
  function fn(n) {
    var num1 = parseInt($(`.ex${n} input:first-child`).val());
    var num2 = parseInt($(`.ex${n} input:last-of-type`).val());

    var sum = num1 + num2;
    var sub = num1 - num2;
    var multi = num1 * num2;
    var divide = num1 / num2;
    var result = `합: ${sum},차: ${sub}, 곱: ${multi},제: ${divide}`;
    $(`.ex${n} p:last-child`).html(result);
  }
  $(".ex1 button").click(function () {
    fn(1);
  });
  $(".ex2 button").click(function () {
    fn(2);
  });

  // ------------------------------------------------------------------
  // 3-4 예제

  $(function () {
    var fnSum = function (num1, num2) {
      var sum = num1 + num2;
      return sum;
    };

    $(".ex3 button:nth-of-type(1)").click(function () {
      var num1 = parseInt($(".ex3 input:nth-child(1)").val());
      var num2 = parseInt($(".ex3 input:nth-child(2)").val());
      var sum = fnSum(num1, num2);
      $(".ex3 p:last-child").html(sum);
    });

    var fnSub = function (num1, num2) {
      var sub = num1 - num2;
      return sub;
    };

    $(".ex3 button:nth-of-type(2)").click(function () {
      var num1 = parseInt($(".ex3 input:nth-child(1)").val());
      var num2 = parseInt($(".ex3 input:nth-child(2)").val());
      var sum = fnSub(num1, num2);
      $(".ex3 p:last-child").html(sum);
    });
  });

  $(function () {
    var fn = function (n) {
      var num = parseInt($(`.ex${n} input`).val());
      return num * num * num * num * num;
    };

    $(".ex4 button").click(function () {
      fn(4);
    });
    $(".ex5 button").click(function () {
      fn(5);
    });
  });

  $(function () {
    var fn = function (n) {
      var num1 = $(`.ex${n} input:nth-of-type(1)`).val();
      var num2 = $(`.ex${n} input:nth-of-type(2)`).val();
      var num3 = $(`.ex${n} input:nth-of-type(3)`).val();

      var number1 = num1 + num2 + num3;

      var number2 = number1 / 3;

      $(`.ex${n} p:last-child`).html(
        `총점: ${number1}, 평균 ${number2.toFixed(2)}`
      );
    };
    $(".ex6 button").click(function () {
      fn(6);
    });
    $(".ex7 button").click(function () {
      fn(7);
    });
  });
});
