$(document).ready(function () {
  $(".ex1 button").click(function () {
    var num1 = parseInt(prompt("첫번째 숫자를 입력하세요"));
    var num2 = parseInt(prompt("두번째 숫자를 입력하세요"));
    var result = num1 % num2;
    alert(`나머지는 ${result}`);
  });

  $(".ex2 button").click(function () {
    var num1 = parseInt($(".ex2 .num1").val());
    var num2 = parseInt($(".ex2 .num2").val());
    var result = num1 + num2;
    $(".ex2 p").html(`결과 : ${result}`);
    $(".ex2 .num1").val(" ");
    $(".ex2 .num2").val(" ");
  });

  $(".ex3 button")
    .mouseenter(function () {
      $(".ex3 p").html("mouseenter");
    })
    .mouseleave(function () {
      $(".ex3 p").html("mouseleave");
    });

  $(".ex4 button").click(function () {
    $(".ex4 input").val($(".ex4 p").html());
  });

  $(".ex5 input").change(function () {
    var str = $(".ex5 input:checked").val();
    $(".ex5 p").html(str);
  });

  $(".ex6 select").change(function () {
    var num = $(".ex6 select").val();
    $(".ex6 p").html(num);
  });

  $(".ex7 button").click(function () {
    var num1_10 = $(".ex7 .num1_10").val();
    var num1_1 = $(".ex7 .num1_1").val();
    var num1 = parseInt(num1_10 + num1_1);
    console.log(num1);
    var num2_10 = $(".ex7 .num2_10").val();
    var num2_1 = $(".ex7 .num2_1").val();
    var num2 = parseInt(num2_10 + num2_1);
    console.log(num2);
    var result = num1 + num2;
    $(".ex7 div").html(`결과 : ${result}`);
  });

  $(".ex8 button").click(function () {
    var container = parseInt($(".ex8 .container").val());
    var grid = parseInt($(".ex8 .grid").val());
    var num = parseInt($(".ex8 .num").val());
    var result = (container - grid * num) / (num + 1);
    $(".ex8 p").html(`결과 : ${result}`);
  });

  $(".ex9 button").click(function () {
    var container = parseInt($(".ex9 .container").val());
    var blank = parseInt($(".ex9 .blank").val());
    var num = parseInt($(".ex9 .num").val());
    var result = (container - blank * num) / (num - 1);
    $(".ex9 p").html(`결과 : ${result}`);
  });
});
