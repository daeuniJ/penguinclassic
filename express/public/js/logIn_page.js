let login_btn = document.querySelector(".login_btn");


function logInF(e){
    let logIn_id = document.querySelector(".logIn_id");
    let logIn_pwd = document.querySelector(".logIn_pwd");

    if(logIn_id.value==''){
        alert("아이디를 입력해주세요.");
        e.preventDefault();
        return false;
    }
    if(logIn_pwd.value==''){
        alert("비밀번호를 입력해주세요.");
        e.preventDefault();
        return false;
    }
}

login_btn.addEventListener('click',logInF);