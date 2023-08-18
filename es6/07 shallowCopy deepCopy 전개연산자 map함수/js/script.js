// ========== shallowCopy <--spread함수 ==========
{
  let arr = ['가', '나', '다'];
  let arrCopy = arr;
  arr.push('라');
  console.log(arrCopy);

  let arr2 = ['가', '나', '다', '라', '마'];
  let arr2Copy = [...arr2]; //전개연산자, spread operator
  arr2.push('바');
  console.log(arr2);
  console.log(arr2Copy);

  let obj = { 이름: '홍길동', 나이: '24' };
  let objCopy = { ...obj };
  console.log(objCopy);
}

// ========== deepCopy <--map함수 ==========

{
  //배열의 깊은복사
  let arr1 = [1, 2, 3];

  let arr2 = arr1.map((v) => {
    return v;
  });

  arr1.push(4);
  console.log(arr1, arr2);
}

{
  //배열안의 객체의 깊은복사
  let arr = [
    { 이름: '홍길동', 성별: '남' },
    { 이름: '아무개', 성별: '여' },
  ];
  let arrCopy = arr.map((v) => {
    return { ...v };
  });

  arr[0].이름 = '김철수';
  console.log(arr, arrCopy);
}
