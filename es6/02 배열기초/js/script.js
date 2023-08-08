const arr = ['가', '나', '다', '라'];

//ex0번 클릭
document.querySelector('.ex0 button').addEventListener('click', () => {
  // document.querySelector('.ex1 .result').append(arr[0]);
  // document.querySelector('.ex1 .result').append(arr[1]);
  // document.querySelector('.ex1 .result').append(arr[2]);
  // document.querySelector('.ex1 .result').append(arr[3]);

  arr.forEach((value, index) => {
    document.querySelector('.ex0 .result').append(value);
  });
});

//ex1번 클릭
document.querySelector('.ex1 button').addEventListener('click', () => {
  arr.forEach((value, index) => {
    //value 는 arr 자체, index 는 순번
    document.querySelector('.ex1 .result').append(arr[index]);
  });
});
// //ex2번 클릭 <-- querySelector 한놈만 찾아서 1번만 클릭되어 alert된다.
// document.querySelector('.ex2 button').addEventListener('click', (e) => {
//   //e는 이벤트 리스너라는것.
//   alert(e.target.value);
// });

//ex2번 클릭
{
  const btnArr = document.querySelectorAll('.ex2 button');
  //btnArr = [<button>,<button>,<button>]
  btnArr.forEach((btn) => {
    // parameter 하나만 있으니까 btn 감싸고 있는 소괄호 생략 가능
    btn.addEventListener('click', (e) => {
      // parameter 하나만 있으니까 e 감싸고 있는 소괄호 생략 가능
      document.querySelector('.ex2 .result').innerHTML = e.target.value;
    }); //click
  }); //forEach
}

//ex3번 클릭
{
  document.querySelector('.ex3 button').addEventListener('click', (e) => {
    document.querySelectorAll('.ex3 div').forEach((div) => {
      div.style.backgroundColor = 'red';
    });
  }); //click
}

// //ex4번 클릭 <-- 하나만 토글해보기
// {
//   document.querySelectorAll('.ex4 div').forEach((div) => {
//     div.addEventListener('click', (e) => {
//       e.target.classList.toggle('active');
//     }); //click
//   }); //forEach
// }

//ex4번 클릭 <- 전부 토글로 바꾸기
{
  document.querySelectorAll('.ex4 div').forEach((div) => {
    div.addEventListener('click', () => {
      document.querySelectorAll('.ex4 div').forEach((div) => {
        div.classList.toggle('active');
      });
    }); //click
  }); //forEach
}

//ex5번 클릭
{
  document.querySelector('.ex5 button').addEventListener('click', () => {
    document.querySelectorAll('.ex5 div').forEach((div) => {
      div.style.background = div.getAttribute('data-bg');
    });
  }); //click
}

//ex6번 클릭

document.querySelectorAll('.ex6 input').forEach((input) => {
  input.value = Math.floor(Math.random() * 10);
});

{
  document.querySelector('.ex6 button').addEventListener('click', () => {
    let answer = 0;

    document.querySelectorAll('.ex6 input').forEach((p) => {
      answer += parseInt(p.value);
    });
    document.querySelector('.ex6 .result').innerHTML = answer;
  });
}

//ex7번

{
  // document.getElementById('id1') === document.querySelector('#id1');
  document.getElementById('id1').style.background = 'red';
  Array.from(document.getElementsByTagName('a')).forEach((e) => {
    // 짝퉁배열(유사배열(HTMLCollection))을 실제 배열로 바꾸는 명령어 --> Array.from()
    e.style.textDecoration = 'none';
  });

  Array.from(document.getElementsByClassName('a')).forEach((el) => {
    el.style.color = 'red';
  });
}

//ex8번

{
  answer = '';
  document.querySelector('.ex8 button').addEventListener('click', (e) => {
    document.querySelectorAll('.ex8 .category').forEach((category) => {
      answer = '';
      category.querySelectorAll('input:checked').forEach((checkedInput) => {
        answer += checkedInput.value;
      }); //input:checked forEach
      category.querySelector('.ex8 .result').innerHTML = answer;
    }); //category forEach
  }); //click
}

//ex9번

{
  document.querySelectorAll('.ex9 input').forEach((input) => {
    input.readOnly = true;
    input.value = Math.floor(Math.random() * 10);
  });

  document.querySelector('.ex9 button').addEventListener('click', (e) => {
    document.querySelectorAll('.ex9 .numbers').forEach((numbers) => {
      let sum = 0;

      numbers.querySelectorAll('input').forEach((input) => {
        sum += parseInt(input.value);
      });
      numbers.querySelector('p').innerText = sum;
    });
  });
}

//ex10번

{
  document.querySelectorAll('.ex10 button').forEach((button) => {
    button.addEventListener('click', (e) => {
      Array.from(e.target.parentElement.children).forEach((button) => {
        button.style.color = 'black';
      });
      e.target.style.color = 'red';
    });
  });
}

//ex11번

{
  document.querySelectorAll('.ex11 input').forEach((input) => {
    input.addEventListener('input', (e) => {
      let str = e.target.value;
      let digit = parseInt(e.target.getAttribute('data-digit'));
      if (str.length >= digit && e.target.nextElementSibling) {
        e.target.nextElementSibling.focus();
      }
    });
  });
}

//ex12번

// {
//   document.querySelectorAll('.ex12 button').forEach((button) => {
//     button.addEventListener('click', (e) => {
//       document.querySelectorAll('.ex12 button').forEach((button) => {
//         if (button.classList.value === 'active') {
//           button.classList.remove('active'),
//             e.target.classList.toggle('active');
//         } else {
//           e.target.classList.toggle('active');
//         }
//       });
//     });
//   });
// }

{
  document.querySelectorAll('.ex12 button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const isActive = e.target.classList.contains('active');

      document.querySelectorAll('.ex12 button').forEach((btn) => {
        btn.classList.remove('active');
      });

      if (!isActive) {
        e.target.classList.add('active');
      }
    });
  });
}
