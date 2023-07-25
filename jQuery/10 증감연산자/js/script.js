$(function () {
  var num = 1;
  return num++;
});

$(function () {
  var fnSetNum = function (q) {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);

    $(`.ex3 fieldset:nth-of-type(${q}) input:nth-child(2)`).val(num1);
    $(`.ex3 fieldset:nth-of-type(${q}) input:nth-child(3)`).val(num2);
  };

  // $('.ex input:nth-child(1)').val();
  fnSetNum(1);
  fnSetNum(2);
});
