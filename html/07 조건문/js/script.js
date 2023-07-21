$(function () {
  //   $('.ex1 button').click(function (e) {
  //     e.preventDefault();
  //     /* 이벤트리스터에 적용하는 프리벤트디폴트 -> 자동 새로고침 제거 */
  //     $('.ex1 .result').text('안녕하세요?');
  //   });

  var 컴퓨터뽑기 = function () {
    /* 
      3 ~ 8 중의 하나의 숫자를 뽑아보세요
      var num1 = Math.random() * (8 - 3 + 1) -> 0.000000001 ~ 5.9999999
      정수 = Math.floor(소수점) -> 0 ~ 5
      뽑기 = 정수 + 3 -> 3 ~ 8
       */

    //컴퓨터가 1,2,3 중에 하나를 뽑는다.
    var 소수점숫자 = Math.random() * 3; //0.00..001 ~ 2.99...99...
    //Math.round(1.5)->2, Math.floor(1.5)->1, Math.ceil(1.2)->2
    var 숫자 = Math.ceil(소수점숫자);
    // 컴퓨터가 1이면 가위 2이면 바위 3이면 보로 변경한다.
    var 결과;
    if (숫자 === 1) 결과 = '가위';
    else if (숫자 === 2) 결과 = '바위';
    else 결과 = '보';
    console.log(결과);
    return 결과;
  }; //컴퓨터뽑기

  var 승부판정하기 = function (컴, 유저) {
    if (
      (유저 === '가위' && 컴 === '보') ||
      (유저 === '바위' && 컴 === '가위') ||
      (유저 === '보' && 컴 === '바위')
    ) {
      결과 = '사용자 승';
    } else if (
      (유저 === '가위' && 컴 === '가위') ||
      (유저 === '바위' && 컴 === '바위') ||
      (유저 === '보' && 컴 === '보')
    ) {
      결과 = '비김';
    } else {
      결과 = '컴퓨터 승';
    }
    return 결과;
  }; //승부판정하기 함수

  $('.ex1').submit(function (e) {
    e.preventDefault();
    var 컴퓨터가뽑은거 = 컴퓨터뽑기(); //가위바위보중에 하나를 리턴한다.
    var 유저가선택한거 = $('.ex1 input:checked').val(); //가위, 바위, 보 중에 하나가 리턴된다.
    var 결과 = 승부판정하기(컴퓨터가뽑은거, 유저가선택한거);
    var 출력 = `컴퓨터:${컴퓨터가뽑은거}, 유저:${유저가선택한거}, 결과:${결과}`;
    $('.ex1 .result').text(출력);
  });
}); //ready

$(function () {
  var fnSetNum = function (q) {
    var num1 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${q} .num1`).val(num1);
    var num2 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${q} .num2`).val(num2);
  }; //fnSetNum

  fnSetNum(1);
  fnSetNum(2);
  fnSetNum(3);

  var fnCheckNum = function (q) {
    var num1 = parseInt($(`.ex2 .q${q} .num1`).val());
    var num2 = parseInt($(`.ex2 .q${q} .num2`).val());
    var userNum = parseInt($(`.ex2 .q${q} .usernum`).val());
    if (num1 + num2 === userNum) {
      return true;
    } else {
      return false;
    }
  }; //fnCheckNum

  $('.ex2').submit(function (e) {
    e.preventDefault();
    // fnCheckNum(1);
    // fnCheckNum(2);
    // fnCheckNum(3);
    if (fnCheckNum(1) && fnCheckNum(2) && fnCheckNum(3)) {
      //3항목 모두 정답이라면
      result = '정답';
    } else {
      result = '오답';
    }
    $('.ex2 .result').html(result);
  });
}); //ready

$(function () {
  console.log('.ex3 .num1'.val());
  var num1 = parseInt('.ex3 .num1').val();
  var num2 = parseInt('.ex3 .num2').val();
  console.log(num1);
  $('.ex3').submit(function (e) {
    e.preventDefault();
    console.log('.ex3 .num1'.val());

    $('.ex3 .result').html(num1, num2);
  });
});
