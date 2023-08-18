{
  let arr = [];
  document.querySelector('.ex1 button').addEventListener('click', (e) => {
    let name = document.querySelector('.ex1 input[type="text"]').value;
    let age = document.querySelector('.ex1 input[type="number"]').value;
    let gender = document.querySelector('.ex1 input:checked').value;
    let obj = {
      name,
      age,
      gender,
    };
    arr.push(obj);

    document.querySelector('.ex1 .result').innerHTML = '';
    arr.forEach((v) => {
      let { name, age, gender } = v;
      /* destructuring, 구조분해 , 비구조할당 */
      document.querySelector('.ex1 .result').insertAdjacentHTML(
        'beforeend',
        `
      <p>
        이름 : ${name} ,
        나이 : ${age} ,
        성별 : ${gender} ,
      </p>
      `
      );
    });
  }); //click
}
