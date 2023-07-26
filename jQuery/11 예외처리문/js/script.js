$(function () {
  $('.ex1 button').click(function () {
    throw '에러내용';
  });

  $('.ex2 button').click(function () {
    try {
      alert(a);
      /* 일단 들이대봐 a 를 어떻게든 해봐 */
    } catch {
      alert('a변수는 존재하지 않아요');
    }
  });

  // var fn = new Function('alert()');
  // var str = '1+1';
  // var fn = new Function(`alert${str} `);

  $('.ex3 button').click(function () {
    var num1 = $('.ex3 .num1').val();
    var num2 = $('.ex3 .num2').val();
    var oper = $('.ex3 select').val();
    var str = num1 + oper + num2;
    var result;
    try {
      var fn = new Function(`return (${str})`);
      result = fn();
    } catch {
      result = '잘못된 연산자를 선택하셨습니다.';
    }
    $('.ex3 .result').text(result);
  });
});

$(function () {
  var str = '';
  $('.str').click(function () {
    str += $(this).text();
    $('.output').text(str);
  });

  $('.clear').click(function () {
    str = '';
    $('.output').text('');
  });

  $('.delete').click(function () {
    str = str.slice(0, -1);
    $('.output').text(str);
  });

  $('.result').click(function () {
    try {
      var fn = new Function(`return ${str}`);
      $('.output').text(fn());
    } catch {
      alert('계산식이 잘못되었습니다.');
      str = '';
      $('.output').text('');
    }
  });
});
