{
    document.querySelector('.login-form').addEventListener('submit',async (e)=> {
        e.preventDefault()
        document.querySelector('.login-form button').disabled = true;
        let result = await fetch('./js/a.json')
        let memberArr = await result.json()

        let userid = document.querySelector('.id').value
        let userpw = document.querySelector('.pw').value
        let userInfo = memberArr.filter(v => userid ===v.id && userpw === v.pw)[0];
        if(!userInfo){
            alert('잘못된 회원정보')
            document.querySelector('.login-form button').disabled = false;
            return
        }
        let {id,name} = userInfo
        let obj = {id, name}
        sessionStorage.setItem('userSession', JSON.stringify(obj))
        location.href = './product.php'
    })
}