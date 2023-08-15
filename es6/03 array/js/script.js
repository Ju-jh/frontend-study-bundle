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
  // 문제 내는것.
  let enStr = 'sun,mon,tur,wed,thr,fry,sat';
  let koStr = '일,월,화,수,목,금,토';
  let enArr = enStr.split(',');
  let koArr = koStr.split(',');
  let enArrCopy = [...enArr]; //spread함수 spread operator 전개 연산자 (배열은 함부러 지울 수 없다. 그래서 구조분에 할당을 통하여 복사를 해준다.)
  let qStr = '';
  let n = Math.ceil(Math.random() * 5);
  for (let i = 1; i <= n; i++) {
    let ranN = Math.floor(Math.random() * enArrCopy.length); //2
    let day = enArrCopy[ranN];
    enArrCopy.splice(ranN, 1); //[sun,mon,wed,thr,fry,sat]
    qStr += i < n ? day + ',' : day;
  }
  document.querySelector('.ex8 .q').value = qStr;
  let qStrArr = qStr.split(',');

  // 문제 맞춰보기
  document.querySelector('.ex8 button').addEventListener('click', (e) => {
    let enArrCopy = [...enArr]; //spread함수 spread operator 전개 연산자 (배열은 함부러 지울 수 없다. 그래서 구조분에 할당을 통하여 복사를 해준다.)
    let koArrCopy = [...koArr];
    koDay = document.querySelector('.ex8 .a').value;
    koDayArr = koDay.split(',');
    let ansNum = 0;
    for (let i = 0; i <= n - 1; i++) {
      let k = koArrCopy.indexOf(koDayArr[i]);
      let q = enArrCopy.indexOf(qStrArr[i]);
      if (k === q) {
        ansNum += 1;
      } else {
      }
    }
    if (ansNum === n) {
      ansNum = 0;

      document.querySelector('.ex8 .result').innerHTML = '정답입니다.';

      setTimeout(function () {
        alert('정답입니다. 새로운 문제를 제시합니다.'); //알러트
        location.reload(); // 페이지 새로고침
        document.querySelector('.ex8 .a').value = '';
        document.querySelector('.ex8 .a').focus();
      }, 1000); // 1초 후 실행
    } else {
      ansNum = 0;
      document.querySelector('.ex8 .a').value = '';
      document.querySelector('.ex8 .a').focus();
      document.querySelector('.ex8 .result').innerHTML = '오답입니다.';
    }
  });
}

/* ex9 */

{
  // 문제 내는것.
  let enStr = 'sun,mon,tur,wed,thr,fry,sat';
  let koStr = '일,월,화,수,목,금,토';
  let enArr = enStr.split(',');
  let koArr = koStr.split(',');
  let enArrCopy = [...enArr]; //spread함수 spread operator 전개 연산자 (배열은 함부러 지울 수 없다. 그래서 구조분에 할당을 통하여 복사를 해준다.)
  let qStr = '';
  let n = Math.ceil(Math.random() * 5);
  for (let i = 1; i <= n; i++) {
    let ranN = Math.floor(Math.random() * enArrCopy.length); //2
    let day = enArrCopy[ranN];
    enArrCopy.splice(ranN, 1); //[sun,mon,wed,thr,fry,sat]
    qStr += i < n ? day + ',' : day;
  }
  document.querySelector('.ex9 .q').value = qStr;

  document.querySelector('.ex9 button').addEventListener('click', (e) => {
    let point = 0;
    let qArr = document.querySelector('.ex9 .q').value.split(',');
    let aArr = document.querySelector('.ex9 .a').value.split(',');
    for (let i = 0; i < qArr.length; i++) {
      if (enArr.indexOf(qArr[i]) === koArr.indexOf(aArr[i])) {
        point++;
      }
    } //for문

    let result = point === qArr.length ? '정답' : '오답';
    document.querySelector('.ex9 .result').innerText = result;
  });
}

/* ex10 */

{
  let alphabetArr = 'abcdefefghijklmnopqrstuvwxyz'.split('');
  let numberArr = [];

  alphabetArr.forEach((v, i) => {
    numberArr.push(i);
  });

  document.querySelector('form.ex10').addEventListener('submit', (e) => {
    e.preventDefault();
    let spellArr = document
      .querySelector('form.ex10 input')
      .value.toLowerCase()
      .split('');
    document.querySelector('form.ex10 .result').innerText = '';
    spellArr.forEach((v, i) => {
      spellIdx = alphabetArr.indexOf(v);
      let str =
        i < spellArr.length - 1
          ? numberArr[spellIdx] + ','
          : numberArr[spellIdx];
      document.querySelector('form.ex10 .result').innerText += str;
    }); //forEach
  }); //submit
}

/* ex11 */

{
  let alphabetArr = 'abcdefefghijklmnopqrstuvwxyz'.split('');
  let numberArr = [];

  alphabetArr.forEach((v, i) => {
    numberArr.push(i);
  });

  document.querySelector('form.ex11').addEventListener('submit', (e) => {
    e.preventDefault();
    let password = document.querySelector('form.ex11 input').value.split(',');
    document.querySelector('form.ex11 .result').innerText = '';
    password.forEach((v, i) => {
      numIdx = numberArr.indexOf(parseInt(v));
      let str =
        i < password.length - 1
          ? alphabetArr[numIdx] + ','
          : alphabetArr[numIdx];
      document.querySelector('form.ex11 .result').innerText += str;
    });
  });
}
