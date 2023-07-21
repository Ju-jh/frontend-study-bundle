$(function () {
  $('#range').bind('input', function () {
    var n = $('#range').val();
    $('.range').html(n);
  });
});
