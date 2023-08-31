document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let dashOffset = 100 - e.target.value;
    document.querySelector('.svg3 .circle2').style.strokeDashoffset =
      dashOffset + 'px';
  });
});
