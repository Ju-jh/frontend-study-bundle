/*============= ex1 =============*/

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

/*============= ex2 =============*/

{
  let arr = [
    { name: '김', age: 25, gender: '남' },
    { name: '이', age: 33, gender: '녀' },
    { name: '박', age: 23, gender: '남' },
  ];
  document.querySelector('.ex2 button').addEventListener('click', (e) => {
    document.querySelector('.ex2 .result').innerHTML = '';
    arr.forEach((v) => {
      /*
      let p = document.createElement('p');
      p.innerText = `이름:${v.name}, 나이:${v.age}, 성별:${v.gender}`;
      document.querySelector('.ex2 .result').append(p);
      */
      /* 
      afterbegin <== 앞쪽에 끼워넣기 (넣는 것) 
      beforeend <== 뒷쪽에 끼워넣기 (태그가 끝나는 그 지점전) ===  append
      */
      document.querySelector('.ex2 .result').insertAdjacentHTML(
        'beforeend',
        `
      <p>이름:${v.name}, age:${v.age}, gender:${v.gender}</p>
      `
      );
    });
  });
}

/*============= ex3 =============*/

{
  let arr = [
    { name: '김', age: 25, gender: '남' },
    { name: '이', age: 33, gender: '녀' },
    { name: '박', age: 23, gender: '남' },
  ];

  document.querySelector('.ex3 button').addEventListener('click', (e) => {
    e.target.disabled = true;
    document.querySelector('.ex3 .result').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;

    arr.forEach((v) => {
      document.querySelector('.ex3 .result tbody').insertAdjacentHTML(
        'beforeend',
        `
          <tr>
            <td>${v.name}</td>
            <td>${v.gender}</td>
            <td>${v.age}</td>
          </tr>
      `
      );
    });
  });
}

/*============= ex4 =============*/
{
  let arr = [
    {
      //문제1번
      question: '4-1. one에 해당하는 숫자를 고르세요',
      radios: [
        { number: '1', value: 'o', name: 'radio1' },
        { number: '2', value: 'x', name: 'radio1' },
        { number: '3', value: 'x', name: 'radio1' },
      ],
    },
    {
      //문제2번
      question: '4-2. two에 해당하는 숫자를 고르세요',
      radios: [
        { number: '1', value: 'x', name: 'radio2' },
        { number: '2', value: 'o', name: 'radio2' },
        { number: '3', value: 'x', name: 'radio2' },
      ],
    },
    {
      //문제3번
      question: '4-3. three에 해당하는 숫자를 고르세요',
      radios: [
        { number: '1', value: 'x', name: 'radio3' },
        { number: '2', value: 'x', name: 'radio3' },
        { number: '3', value: 'o', name: 'radio3' },
      ],
    },
  ];

  //전체문제 반복
  arr.forEach((q) => {
    document.querySelector('.ex4 .questions').insertAdjacentHTML(
      'beforeend',
      `
      <div>
        <p>${q.question}</p>
        <p class="radios">
        </p>
      </div>
    `
    );
    q.radios.forEach((radio) => {
      document
        .querySelector('.ex4 .questions div:last-child .radios')
        .insertAdjacentHTML(
          'beforeend',
          `
            <input type="radio" value="${radio.value}" name="${radio.name}"> ${radio.number}
    `
        );
    });
  });

  document.querySelector('.ex4 button').addEventListener('click', (e) => {
    let point = 0;
    document.querySelectorAll('.ex4 input:checked').forEach((input) => {
      console.log('@@@@@', input.value);
      if (input.value === 'o') point++;
    });
    document.querySelector('.ex4 .result').innerText = point;
  });
}
