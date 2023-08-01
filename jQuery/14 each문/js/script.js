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

/* -------------------------8번 */

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
    var point = 0;
    $('.ex8 .q').css({ background: 'none' });

    $('.ex8 .q').each(function () {
      var user = $(this).children('input:checked').val();
      if (user === '정답') {
        point += 1;
        $(this).css({ background: '#00F', color: 'white' });
        console.log('정답');
      } else {
        $(this).css({ background: '#F00', color: 'white' });
        console.log('오답');
      }
    }); //each

    $('.ex8 .result').text(point);
  }); //click
}); //ready

/* -------------------------9번 */

$(function () {
  $('.ex9 button').click(function () {
    var result = '';

    $('.ex9 input:checked').each(function () {
      result += $(this).val();
      +',';
    });
    $('.ex9 .result').text(result);
  }); //click
}); //ready

/* -------------------------10번 */
//내가 만든것.
// $(function () {
//   $('.ex10 button').click(function () {
//     var point = 0;
//     var total = 0;
//     $('.ex10 .q1 input:checked').each(function () {
//       var userCheck = $(this).val();
//       if (userCheck === '정답') {
//         point++;
//       } else {
//       }
//     });
//     if (point === parseInt($('.ex10 .q1').attr('data-cnt'))) {
//       console.log('1번 완전정답');
//       total++;
//     } else {
//       console.log('1번 완전오답');
//     }
//     var point2 = 0;
//     $('.ex10 .q2 input:checked').each(function () {
//       var userCheck = $(this).val();
//       if (userCheck === '정답') {
//         point2++;
//       } else {
//       }
//     });
//     if (point2 === parseInt($('.ex10 .q2').attr('data-cnt'))) {
//       console.log('2번 완전정답');
//       total += 1;
//     } else {
//       console.log('2번 완전오답');
//     }

//     if (total === 2) {
//       $('.ex10 .result').text('정답!');
//     } else {
//       $('.ex10 .result').text('오답!');
//     }
//     console.log('포인트', point);
//     console.log('토틸', total);
//   });
// });

$(function () {
  $('.ex10 button').click(function () {
    var point = 0;
    $('.ex10 .q').each(function () {
      var checkcnt = 0;

      $(this)
        .children('input:checked')
        .each(function () {
          if ($(this).val() === '정답') {
            checkcnt++;
          } else {
            checkcnt--;
          }
        }); //each

      var totalcnt = parseInt($(this).attr('data-cnt'));
      if (checkcnt === totalcnt) {
        point++;
      }
    }); //.q each

    $('.ex10 .result').text(point);
  }); //click
}); //ready

/* -------------------------11번 */

$(function () {
  $('.ex11 button').click(function () {
    $('.ex11 .q').each(function () {
      var result = '';

      $(this)
        .children('input:checked')
        .each(function () {
          var userCheck = $(this).val();
          result += userCheck + ',';
          console.log(result);
        });
      $(this).children('.result').text(result);
    }); //each
  }); //click
}); //ready

/* -------------------------12번 */

$(function () {
  $('.ex12 > div').mouseenter(function () {
    $(this)
      .children()
      .each(function () {
        var bg = $(this).text();
        $(this).css({ background: bg });
      }); //each
  }); //mouseenter

  $('.ex12 > div').mouseleave(function () {
    $('.ex12 > div > div').css({ background: 'none' });
  });
}); //ready
