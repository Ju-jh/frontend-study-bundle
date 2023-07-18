$(function () {
  var fnSetNumber = function (el, n) {
    var result = el.attr('data-num');
    $(`.ex${n} .result`).html(`결과 : ${result}`);
  };

  $('.ex1 button').click(function () {
    fnSetNumber($(this), 1);
  });

  $('.ex2 a').click(function (e) {
    e.preventDefault();
    fnSetNumber($(e.target), 2);
  });

  var fnChangNum = function (el, n) {
    $(`.ex${n} button`).css({ color: 'black', 'font-weight': 'normal' });
    el.css({ color: 'red', 'font-weight': 'bold' });
  };

  $('.ex3 button').click(function () {
    fnChangNum($(this), 3);
  });

  $('.ex4 button').click(function () {
    fnChangNum($(this), 4);
  });

  $('.ex5 button').click(function () {
    $('.ex5 .img3').show(); // hide()
  });

  var fnChangeImg = function (el, n) {
    $(`.ex${n} img`).hide();
    $(`.ex${n} button`).css({ color: 'black', 'font-weight': 'normal' });
    el.css({ color: 'red', 'font-weight': 'bold' });
    var img = el.attr('class');

    $(`.ex${n} .${img}`).show();
  };

  $('.ex5 button').click(function (e) {
    fnChangeImg($(e.target), 5);
  });

  $('.ex6 button').click(function (e) {
    fnChangeImg($(e.target), 6);
  });
});
