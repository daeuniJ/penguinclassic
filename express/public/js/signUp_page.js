let btnClick = document.querySelector('.btnClick');

function signupCheck (e){
    let sp_name = document.querySelector('#sp_name');
    let sp_id = document.querySelector('#sp_id');
    let sp_pwd = document.querySelector('#sp_pwd');
    let sp_email = document.querySelector('#sp_email');
    let sp_p_num = document.querySelector('#sp_p_num');

    if(sp_name.value == ''){
        alert('이름을 입력해주세요.')
        e.preventDefault();
        return false;
    }
    if(sp_id.value == ''){
        alert('아이디를 입력해주세요.')
        e.preventDefault();
        return false;
    }
    if(sp_pwd.value == ''){
        alert('비밀번호를 입력해주세요.')
        e.preventDefault();
        return false;
    }
    if(sp_email.value == ''){
        alert('이메일을 입력해주세요.')
        e.preventDefault();
        return false;
    }
    if(sp_p_num.value == ''){
        alert('휴대폰 번호를 입력해주세요.')
        e.preventDefault();
        return false;
    }
}

btnClick.addEventListener('click', signupCheck);