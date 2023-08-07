// document.addEventListener('DOMContentLoaded', function () {});

// window.addEventListener('load', function () {});

document.querySelector('.ex1 button').addEventListener('click', function () {
  alert(a);
  var a = 1;
  var a = 2;
});

document.querySelector('.ex2 button').addEventListener('click', () => {
  let a = 1;
  a = 2;
  alert(a);
});

document.querySelector('.ex3 button').addEventListener('click', () => {
  const a = 1;
  a = 2;
  alert(a);
});

document.querySelector('.ex4 button').addEventListener('click', () => {
  var a = 1;
  if (a === 1) {
    var a = 2;
    // alert(a);
  }
  alert(a); //<=== 밖으로 빼도 2로 된다.

  // var 는 함수형 스코프 === 함수내에서는 다 같은 변수
});

document.querySelector('.ex5 button').addEventListener('click', () => {
  let a = 1;
  if (a === 1) {
    let a = 2;
    alert(a); //<=== 안에서는 2가 alert 된다.
  }
  alert(a); //<=== 밖으로 빼면 1이 alert 된다.

  // let 은 블록 스코프(중괄호 스코프) === 함수밖에서는 다른 변수
});
