{
    const fnSetTimeout = () => {
        let sec = Math.ceil(Math.random() * 6) *1000
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(sec <= 3000){
                    console.log(sec);
                    resolve('성공');
                }else{
                    reject('실패');
                }
            },sec);
        });
    }
    const fnPrint = (result) => {
        document.querySelector('.ex1 .result').innerText = result
    }

    document.querySelector('.ex1 .btn1').addEventListener('click', e => {
        console.log('클릭');
        fnSetTimeout().then((data) => {
            fnPrint(data);
        }).catch((err) => {
            alert((err))
        })
    })
    document.querySelector('.ex1 .btn2').addEventListener('click', async (e) => {
        console.log('클릭');
        try{
            let res = await fnSetTimeout()
            fnPrint(res)
        }catch{
            alert('에러')
        }
    })
}

{

    const 밀농사 = (재료) => {
        return new Promise((resolve, reject) => {
            let sec = Math.ceil(Math.random() * 3) *1000
            setTimeout(()=>{
                if(sec <= 2000){
                    console.log(`${재료}를 받아서 밀농사 성공,${sec}`);
                    resolve('밀')
                }else{
                    console.log(`밀농사 실패 ${sec}`);
                    reject(`밀농사 실패,${sec}`)
                }
            }, sec)
        })
    }
    const 밀가루생산 = (재료) => {
        return new Promise((resolve, reject) => {
            let sec = Math.ceil(Math.random() * 3) *1000
            setTimeout(()=>{
                if(sec <= 2000){
                    console.log(`${재료}를 받아서 밀가루 성공,${sec}`);
                    resolve('밀가루')
                }else{
                    console.log(`밀가루 실패 ${sec}`);
                    reject(`밀가루 실패,${sec}`)
                }
            }, sec)
        })
    }
    const 빵생산 = (재료) => {
        return new Promise((resolve, reject) => {
            let sec = Math.ceil(Math.random() * 3) *1000
            setTimeout(()=>{
                if(sec <= 2000){
                    console.log(`${재료}를 받아서 빵 성공,${sec}`);
                    resolve('빵')
                }else{
                    console.log(`빵 실패 ${sec}`);
                    reject(`빵 실패,${sec}`)
                }
            }, sec)
        })
    }

    const 결과출력 = (결과) => {
        document.querySelector('.ex2 .result').innerText = 결과
    }
    
    document.querySelector('.ex2 .btn1').addEventListener('click', e => {
        밀농사('씨앗')
        .then((res) => {
            return 밀가루생산(res)
        }).then((res) => {
            return 빵생산(res)
        }).then((res) => {
            결과출력(res)
        }).catch((err) => {
            결과출력(err)
        })
    })
    document.querySelector('.ex2 .btn2').addEventListener('click', async(e) => {
        try{
            let res = await 밀농사('씨앗')
            res = await 밀가루생산(res)
            res = await 빵생산(res)
            결과출력(res)
        }catch{
            결과출력('생산중오류')
        }
        
    })
}