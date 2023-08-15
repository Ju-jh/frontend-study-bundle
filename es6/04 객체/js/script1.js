{
  document.querySelector('.ex1').addEventListener('submit', (e) => {
    e.preventDefault();

    let arr = document.querySelector('.ex1 input').value.split('');
    let obj = {
      a: 1,
    };
    arr.forEach((v) => {
      if (obj[v]) {
        obj[v]++;
      } else {
        obj[v] = 1;
      }
    });
    console.log(obj);
  });
}
