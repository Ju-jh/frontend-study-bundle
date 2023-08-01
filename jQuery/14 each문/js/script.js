/* -------------------------1번 */
$(function () {
  $('.ex1 button').click(function () {
    $('.ex1 div').each(function () {
      var bg = $(this).attr('data-bg');
      $(this).css({ background: bg });
    }); //each
  }); //click
}); //ready

/* -------------------------2번 */
var fnSetBg = function (button) {
  var n = button.val();
  $(`.ex2 .group${n} .box`).each(function () {
    var bg = $(this).attr('data-bg');
    $(this).css({ background: bg });
  });
};

$(function () {
  $('.ex2 button').click(function () {
    fnSetBg($(this));
  });
});

/* -------------------------3번 */
$(function () {
  $('.ex3 button').click(function () {
    $('.ex3 button').css({ color: '#000' });
    var n = $(this).val();
    $(`.ex3 .group${n} .box`).each(function () {
      var textColor = $(this).attr('data-color');
      $(this).css({ color: textColor });
    });

    $(this)
      .parent()
      .children('button')
      .each(function () {});
  }); //click
}); //ready

/* -------------------------4번 */

$(function () {
  $('.ex4 .num').each(function () {
    var n = Math.floor(Math.random() * 10);
    $(this).val(n);
  }); //each

  $('.ex4 .input').bind('input', function () {
    var sum = 0;
    //숫자 갯수만큼 차례대로
    $('.ex4 .num').each(function () {
      //sum값을 증가하겠다.
      sum += parseInt($(this).val());
      console.log(sum);
    });
    var user = parseInt($(this).val());
    var result = sum === user ? '정답' : '오답';
    $('.ex4 .result').text(result);
    console.log(result);
  });
}); //ready

/* -------------------------5번 */

$(function () {
  $('.ex5 .pro').click(function () {
    $('.ex5 .num').each(function () {
      var n = Math.floor(Math.random() * 10);
      $(this).val(n);
    }); //each
  });
  $('.ex5 .res').click(function () {
    var sum = 0;
    $('.ex5 .num').each(function () {
      sum += parseInt($(this).val());
    });
    $('.ex5 .result').text(sum);
  });
}); //ready

/* -------------------------6번 */

$(function () {
  $('.ex6 .q').each(function () {
    $(this).html(`
    <input class="num1" value="${parseInt(
      Math.floor(Math.random() * 10)
    )}" readonly > 
    + <input class="num2" value="${parseInt(
      Math.floor(Math.random() * 10)
    )}" readonly > 
    = <input class="sum">
  `);
  }); //

  $('.ex6 button').click(function () {
    var point = 0;
    $('.ex6 .q').each(function () {
      var num1 = parseInt($(this).children('.num1').val());
      var num2 = parseInt($(this).children('.num2').val());
      var sum = parseInt($(this).children('.sum').val());
      if (num1 + num2 === sum) point++;
    });
    $('.ex6 .result').text(point);
  });
}); //ready

/* -------------------------7번 */

$(function () {
  $('.ex7 .p').each(function () {
    $(this).html(`
    <button>버튼</button>
    <button>버튼</button>
    <button>버튼</button>
    <button>버튼</button>
    <button>버튼</button>
    `);
  });

  $('.ex7 button').click(function () {
    $(this).siblings('button').css({ color: '#000' });
    $(this).css({ color: '#F00' });
  });
}); //ready

/* var n = $(this).val();
      console.log(n);
      if ($(`.ex8 .q${n} input:checked`).val() === '정답') {
        $('.ex8 .result').text('정답입니다~~~!');
        console.log('정답');
      } else {
        console.log($(this).val());
        $(`.ex8 .q${n}`).css({ background: '#F00' });
        console.log('오답');
      } */

$(function () {
  $('.ex8 button').click(function () {
    $('.ex8 .q').css({ background: 'none' });

    var point = 0;

    $('.ex8 .q').each(function () {
      var user = $(`.ex8 input:checked`).val();
      if (user === '정답') {
        console.log(user);

        console.log('정답');
      } else {
        console.log('오답');
      }
    });

    $('.ex8 .result').text(point);
  }); //click
}); //ready
