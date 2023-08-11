{
  let dayString = '월화수목금';
  let dayArr = dayString.split('');
  let nameString = '이기웅/한창윤/정붕기/주재훈/한창훈';
  let nameArr = nameString.split('/');
  document.querySelector('.ex2 button').addEventListener('click', (e) => {
    e.target.disabled = true;
    for (let i = 0; i < 5; i++) {
      let day = dayArr[0];
      dayArr.shift();
      let ranN = Math.floor(Math.random() * nameArr.length);
      let name = nameArr[ranN];
      nameArr.splice(ranN, 1);
      let li = document.createElement('li');
      li.innerText = `${day}요일 밥사는 사람 ${name}`;
      document.querySelector('.ex2 .result').append(li);
    }
  });
}
{
  let answerArr = ['2', '5', '1'];
  document.querySelector('.ex3 button').addEventListener('click', (e) => {
    let inputArr = document.querySelectorAll('.ex3 input');
    let sum = 0;
    inputArr.forEach((v, i) => {
      if (v.value === answerArr[i]) sum++;
    });
    if (sum === 3) document.querySelector('.ex3 .result').innerText = '성공';
    else document.querySelector('.ex3 .result').innerText = '실패';
  });
}

{
  let nameArr = [];
  document.querySelector('.ex4 .add').addEventListener('click', () => {
    nameArr.push(document.querySelector('.ex4 input').value);
  });

  document.querySelector('.ex4 .print').addEventListener('click', (e) => {
    nameArr.forEach((v, i) => {
      console.log(v);
      let li = document.createElement('li');
      li.innerText = `${v}`;
      document.querySelector('.ex4 .result').append(li);
    });
  });
}

// {
//   let nameArr = [];
//   document.querySelector('.ex4 .add').addEventListener('click', (e) => {
//     let name = document.querySelector('.ex4 input').focus();
//     nameArr.push(name);
//     console.log(nameArr);
//   });
//   // add click

//   document.querySelector('.ex4 .print').addEventListener((e) => {
//     nameArr.forEach((v) => {
//       let li = document.createElement('li');
//       li.innerText = v;
//       document.querySelector('.ex4 .result').append(li);
//     });
//   });
// }

/* ex5 */
{
  let en = 'sun,mon,tur,wed,thr,fry,sat';
  let ko = '일,월,화,수,목,금,토';
  let enArr = en.split(',');
  let koArr = ko.split(',');
  let ranN = Math.floor(Math.random() * enArr.length);
  let enDay = enArr[ranN];
  document.querySelector('.ex5 .q').value = enDay;

  document.querySelector('.ex5 button').addEventListener('click', (e) => {
    let koDay = document.querySelector('.ex5 .a').value;
    let a = '';
    if (koArr[ranN] === koDay) {
      a = '정답';
    } else {
      a = '오답';
    }
    document.querySelector('.ex5 .result').innerText = a;
  });
}

/* ex6 */

{
  let en = 'sun,mon,tur,wed,thr,fry,sat';
  let ko = '일,월,화,수,목,금,토';
  let enArr = en.split(',');
  let koArr = ko.split(',');

  document.querySelector('.ex6 button').addEventListener('click', (e) => {
    let koDay = document.querySelector('.ex6 .a').value; //금
    let idx = koArr.indexOf(koDay); //koArr.indexOf('금') -> 5
    if (idx === -1) {
      alert('잘못된 요일을 입력하셨어요');
      document.querySelector('.ex6 input').value = '';
      document.querySelector('.ex6 input').focus();
    }
    let enDay = enArr[Day];
    document.querySelector('.ex6 .result').innerText = enDay;
  });
}

/* ex7 */

{
  let en = 'sun,mon,tur,wed,thr,fry,sat';
  let ko = '일,월,화,수,목,금,토';
  let enArr = en.split(',');
  let koArr = ko.split(',');

  document.querySelector('.ex7 button').addEventListener('click', () => {
    let str = document.querySelector('.ex7 input').value;
    let inputArr = str.split(',');
    inputArr.forEach((v) => {
      let index = koArr.indexOf(v);
      let enDay = enArr[index];
      document.querySelector('.ex7 .result').append(`${enDay},`);
    });
    console.log(inputArr);
  });
}

/* ex8 */

{
  let enStr = 'sun,mon,tur,wed,thr,fry,sat';

  let koStr = '일,월,화,수,목,금,토';
  let enArr = enStr.split(',');
  let koArr = koStr.split(',');
  let enArrCopy = [...enArr]; //spread함수 spread operator 전개 연산자 (배열은 함부러 지울 수 없다. 그래서 구조분에 할당을 통하여 복사를 해준다.)
  let qStr = '';
  for (let i = 1; i <= 3; i++) {
    let ranN = Math.floor(Math.random() * enArrCopy.length); //2
    let day = enArrCopy[ranN];
    enArrCopy.splice(ranN, 1); //[sun,mon,wed,thr,fry,sat]
    qStr += i < 3 ? day + ',' : day;
  }
  console.log();
  document.querySelector('.ex8 .q').value = qStr;
  let qStrArr = qStr.split(',');
  // 문제 내는것.

  // 문제 맞춰보기
  document.querySelector('.ex8 button').addEventListener('click', (e) => {
    let enArrCopy = [...enArr]; //spread함수 spread operator 전개 연산자 (배열은 함부러 지울 수 없다. 그래서 구조분에 할당을 통하여 복사를 해준다.)
    let koArrCopy = [...koArr];
    koDay = document.querySelector('.ex8 .a').value;
    koDayArr = koDay.split(',');
    let ansNum = 0;
    for (let i = 0; i <= 2; i++) {
      let k = koArrCopy.indexOf(koDayArr[i]);
      console.log('koDayArr', koDayArr);
      console.log('koDayArr의 해당 순서', koDayArr[i]);
      console.log('k 인덱스오브한거', k);
      let q = enArrCopy.indexOf(qStrArr[i]);
      console.log('qqqq', q);
      if (k === q) {
        ansNum += 1;
      } else {
      }
    }
    console.log(ansNum);
    if (ansNum === 3) {
      document.querySelector('.ex8 .result').innerHTML = '정답입니다.';
    } else {
      document.querySelector('.ex8 .result').innerHTML = '오답입니다.';
    }
  });
}
