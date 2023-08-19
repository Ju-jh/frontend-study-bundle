//========== ex1 ===========
{
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // for (i = 1; 1 <= 10; i++) {
  //   arr.push(i);
  // }

  document.querySelector('.ex1 .even').addEventListener('click', (e) => {
    let evenArr = arr.filter((v) => {
      return v % 2 === 0;
    });

    document.querySelector('.ex1 .result').innerHTML = '';

    evenArr.forEach((v) => {
      document.querySelector('.ex1 .result').append(`${v}`);
    });
  });

  document.querySelector('.ex1 .odd').addEventListener('click', (e) => {
    let oddArr = arr.filter((v) => {
      return v % 2 != 0;
    });

    document.querySelector('.ex1 .result').innerHTML = '';

    oddArr.forEach((v) => {
      document.querySelector('.ex1 .result').append(`${v}`);
    });
  }); //click
}

//========== ex2 ==========
{
  //오름차순 버튼 클릭
  document.querySelector('.ex2 .asc').addEventListener('click', (e) => {
    let arr = document.querySelector('.ex2 input').value.split(',');
    arr.sort((a, b) => {
      return a - b;
    });

    document.querySelector('.ex2 .result').innerHTML = '';
    arr.forEach((v) => {
      document.querySelector('.ex2 .result').append(`${v},`);
    });
  });

  //내림차순 버튼 클릭
  document.querySelector('.ex2 .desc').addEventListener('click', (e) => {
    let arr = document.querySelector('.ex2 input').value.split(',');
    arr = arr.sort((a, b) => {
      return b - a;
    });

    document.querySelector('.ex2 .result').innerHTML = '';
    arr.forEach((v) => {
      document.querySelector('.ex2 .result').append(`${v},`);
    });
  });
}

//========== ex3 ==========
{
  let fnSortArr = (arrName, n1, n2) => {
    arrName.sort((a, b) => {
      if (a > b) return n1;
      else if (a < b) return n2;
      else return 0;
    });
  };
  document.querySelector('.ex3 .asc').addEventListener('click', (e) => {
    let arr = document.querySelector('.ex3 input').value.split('');
    fnSortArr(arr, 1, -1);
    //숫자, 글자 둘다 sorting 되는 함수
    //sort
    document.querySelector('.ex3 .result').append(`${arr}`);
  });
  document.querySelector('.ex3 .desc').addEventListener('click', (e) => {
    let arr = document.querySelector('.ex3 input').value.split('');
    fnSortArr(arr, -1, 1);
    //숫자, 글자 둘다 sorting 되는 함수
    //sort
    document.querySelector('.ex3 .result').append(`${arr}`);
  });
}

//========== ex4 ==========
{
  let arr = [
    { id: 1, name: '주재훈', age: 27, gender: '남' },
    { id: 2, name: '이기웅', age: 27, gender: '남' },
    { id: 3, name: '한창윤', age: 26, gender: '남' },
    { id: 4, name: '강해린', age: 17, gender: '여' },
    { id: 5, name: '이지은', age: 33, gender: '여' },
    { id: 6, name: '정붕기', age: 33, gender: '남' },
    { id: 7, name: '구구쀼', age: 22, gender: '여' },
  ];

  let copyArr = [...arr];

  const fnPrintArr = () => {
    document.querySelector('.ex4 .result').innerHTML = '';
    arr.forEach((v) => {
      let { id, name, age, gender } = v;
      document.querySelector('.ex4 .result').insertAdjacentHTML(
        'beforeend',
        `
        <li>
          이름 : ${name},
          나이 : ${age},
          성별 : ${gender},
          <button value="${id}" type="button"> 삭제 </button>
        </li>
        `
      );
      document
        .querySelector('.ex4 .result li:last-child button')
        .addEventListener('click', (e) => {
          let id = parseInt(e.target.value);
          arr = arr.filter((v) => {
            return v.id !== id;
          });
          copyArr = copyArr.filter((v) => {
            return v.id != id;
          });
          copyArr = [...arr];
          fnPrintArr();
        }); //click
    }); //forEach
  };
  const fnPrintNewArr = (arrName) => {
    document.querySelector('.ex4 .result').innerHTML = '';
    arrName.forEach((v) => {
      let { id, name, age, gender } = v;
      document.querySelector('.ex4 .result').insertAdjacentHTML(
        'beforeend',
        `
        <li>
          이름 : ${name},
          나이 : ${age},
          성별 : ${gender},
          <button value="${id}" type="button"> 삭제 </button>
        </li>
        `
      );
      document
        .querySelector('.ex4 .result li:last-child button')
        .addEventListener('click', (e) => {
          let id = parseInt(e.target.value);
          arr = arr.filter((v) => {
            return v.id !== id;
          });
          copyArr = copyArr.filter((v) => {
            return v.id !== id;
          });
          fnPrintNewArr(copyArr);
        }); //click
    }); //forEach
  };
  const fnPushArr = (evt) => {
    evt.preventDefault();
    let name = document.querySelector('.ex4 input[type="text"]').value;
    let age = document.querySelector('.ex4 input[type="number"]').value;
    let gender = document.querySelector('.ex4 input:checked').value;
    let id = Date.now();

    let obj = {
      id,
      name,
      age,
      gender,
    };
    arr.push(obj);
    document.querySelector('.ex4 input[type="text"]').focus();
    document.querySelector('.ex4').reset();
    copyArr = [...arr];
    fnPrintArr(copyArr);
  };
  const fnNameArr = (evt) => {
    evt.preventDefault();
    copyNewArr = [...arr];
    copyNewArr.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    fnPrintNewArr(copyNewArr);
  };
  const fnAgeArr = (evt) => {
    evt.preventDefault();
    copyArr = [...arr];
    copyArr.sort((a, b) => {
      if (a.age > b.age) return 1;
      else if (a.age < b.age) return -1;
      else return 0;
    });
    fnPrintNewArr(copyArr);
  };
  const fnManArr = (evt) => {
    evt.preventDefault();
    copyArr = [...arr];
    copyArr = copyArr.filter((v) => {
      return v.gender === '남';
    });
    fnPrintNewArr(copyArr);
  };
  const fnWomanArr = (evt) => {
    evt.preventDefault();
    copyArr = [...arr];
    let copyNewArr = arr.filter((v) => {
      return v.gender === '여';
    });
    fnPrintNewArr(copyNewArr);
  };

  fnPrintArr();

  document.querySelector('.ex4').addEventListener('submit', (e) => {
    fnPushArr(e);
  });
  document.querySelector('.ex4 .name').addEventListener('click', (e) => {
    fnNameArr(e);
  });
  document.querySelector('.ex4 .age').addEventListener('click', (e) => {
    fnAgeArr(e);
  });
  document.querySelector('.ex4 .man').addEventListener('click', (e) => {
    fnManArr(e);
  });
  document.querySelector('.ex4 .woman').addEventListener('click', (e) => {
    fnWomanArr(e);
  });
  // document.querySelector('.ex4 .search').addEventListener('input', (e) => {
  //   console.log(e.target.value);
  // });
  //
}
