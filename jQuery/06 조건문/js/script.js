/*  

    조건 문법

    if (2 > 1) {할일}


    비교 연산자

    a > b, a < b, a >= b, a <= b

*/

$(function () {
  $('.ex1 button').click(function () {
    var n = parseInt($('.ex1 input').val());
    var result;
    if (n === 1) {
      result = '정답';
    } else {
      result = '오답';
    }
    $('.ex1 .result').html(result);
  }); //click

  $('.ex2 button').click(function () {
    var n = $('.ex2 input').val();
    var result;
    if (n === '1') {
      result = '정답';
    } else if (n === '3') {
      result = '정답';
    } else {
      result = '오답';
    }
    $('.ex2 .result').html(result);
  });

  $('.ex3 button').click(function () {
    var n = parseInt($('.ex3 input').val());
    var result;
    if (n < 5 || n > 10) {
      result = '정답';
    } else {
      result = '오답';
    }
    $('.ex3 .result').html(result);
  });

  $('.ex5 button').click(function () {
    var 상품가격 = parseInt($('.ex5 select option:selected').val());
    var 상품명 = $('.ex5 select option:selected').html();
    var 수량 = parseInt($('.ex5 input:checked').val());
    var 나이 = parseInt($('.ex5 input[type=number]').val());
    // 나이가 19이하 이면서 상품이 담배라면..
    var result;
    if (나이 <= 19 && 상품명 === '담배') {
      result = '미성년자는 구입할 수 없습니다.';
    } else {
      result = 상품가격 * 수량;
    }
    $('.ex5 .result').html(result);
  });

  $('.ex6 button').click(function () {
    var num = $('.ex6 input').val();
    var result;
    if (num >= 100 && num <= 200 && num % 2 === 0) {
      result = '정답';
    } else {
      result = '오답';
    }
    $('.ex6 .result').html(result);
  }); //click

  $('.ex7 button').click(function () {
    var isAdult = $('.ex7 input[type=radio]:checked').val();
    var score = $('.ex7 input[type=number]').val();
    var result;
    if (
      (isAdult === '성인' && score >= 80) ||
      (isAdult === '미성인' && score >= 60)
    ) {
      result = '합격';
    } else {
      result = '불합격';
    }
    $('.ex7 .result').html(result);
  });

  $('.ex8 button').click(function () {
    var sex = $('.ex8 input[type=radio]:checked').val();
    var tall = parseInt($('.ex8 input[name=tall]').val());
    var weight = parseInt($('.ex8 input[name=weight]').val());
    // var age = $('.ex8 input[name=age]').val();
    var bmi = weight / ((tall / 100) * (tall / 100));
    console.log(bmi);
    console.log(sex);

    var result;
    if (sex === '남자' && bmi < 15) {
      result = '마름';
    } else if (sex === '여자' && bmi < 20) {
      result = '마름';
    } else if (sex === '남자' && bmi < 20) {
      result = '저체중';
    } else if (sex === '여자' && bmi < 25) {
      result = '저체중';
    } else if (sex === '남자' && bmi < 25) {
      result = '적정';
    } else if (sex === '여자' && bmi < 30) {
      result = '적정';
    } else if (sex === '남자' && bmi < 30) {
      result = '과체중';
    } else if (sex === '여자' && bmi < 35) {
      result = '과체중';
    } else if (sex === '남자' && bmi >= 30) {
      result = '비만';
    } else if (sex === '여자' && bmi >= 35) {
      result = '비만';
    }
    $('.ex8 .result').html(result);
  });
}); //ready
