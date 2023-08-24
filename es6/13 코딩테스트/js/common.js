{
    let userInfo = JSON.parse(letsessionStorage.getItem('userSession'))
    if(userInfo){
        let {id,name} = userInfo
        document.querySelector('header .member').innerHTML = `
        <nav class="logged-after">
            <b class="user-id">${id}</b> 
             <b class="user-name">${name}</b>
            <a class="log-out" href="#">로그아웃</a>
        </nav>
        `
        document.querySelector('.log-out').addEventListener('click', e=>{
            sessionStorage.removeItem('userSession')
            location.href='./index.php'
        })
    }else{
        document.querySelector('header .member').innerHTML = `
        <nav class="logged-before">
            <a href="./login.php">로그인</a>
            <a href="#">회원가입</a>
        </nav>
        `
    }

}