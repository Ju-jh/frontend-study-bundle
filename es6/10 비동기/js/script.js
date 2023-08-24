/* ========== ex1 ======== Promise then == */

{
  let fnLogin = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('로그인 데이터 처리 완료');
        resolve('userId');
      }, 1000);
    });
  }; //fnLogin

  let fnMember = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${id}회원정보 가져오기 완료`);
        resolve('이름 : 홍길동');
      }, 1000);
    });
  }; //fnMember

  const 회원정보출력 = (member) => {
    console.log(member);
  };

  document.querySelector('.ex1 button').addEventListener('click', (e) => {
    console.log('서버에 로그인 정보 보내기');

    /* [ *** Pomise then 의 잘못된 예시 *** ]콜백지옥 !!!!!!!!!!! */
    /* fnLogin().then((result) => {
      fnMember(result).then((result) => {
        회원정보출력(result);
      });
    }); */

    fnLogin()
      .then((result) => {
        return fnMember(result);
      })
      .then((result) => {
        return 회원정보출력(result);
      });
  });
}

/* ========== ex2 ======== async await == */

{
  const 회원아이디받아오기 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('회원아이디 jjdong 임');
        resolve('jjdong');
      }, 1000);
    });
  };

  const 회원정보받아오기 = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${id}회원 이름 : 홍길동 성별 : 남`);
        resolve('이름 : 홍길동 성별 : 남');
      }, 1000);
    });
  };

  const 회원정보출력 = (member) => {
    console.log(`${member} 출력하겠습니다.`);
  };

  //function 안에서 async를 앞에 붙여야한다.
  document.querySelector('.ex2 button').addEventListener('click', async (e) => {
    console.log('로그인 입력 데이터 전송');

    //회원 아이디 받아오기
    let id = await 회원아이디받아오기();

    //아이디에 해당하는 회원정보 받아오기
    let member = await 회원정보받아오기(id);

    //출력
    회원정보출력(member);
  });
}
