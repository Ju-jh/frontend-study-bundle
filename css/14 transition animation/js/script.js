$(function () {
  $('.ex1 .box2').click(function () {
    $(this).toggleClass('active');
    //toggleClass <-- 클릭할 때 마다 적용하고싶다면
    //addClass <-- 한번 적용하고 싶다면 (일방적)
  });
});
