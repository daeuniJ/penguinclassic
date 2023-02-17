//유효성 검사
let btnClick = document.querySelector('.btnClick');

function signupCheck (e){
    let sp_name = document.querySelector('#sp_name');
    let sp_id = document.querySelector('#sp_id');
    let sp_pwd = document.querySelector('#sp_pwd');
    let sp_email = document.querySelector('#sp_email');
    let sp_p_num = document.querySelector('#sp_p_num');

    //이름 검사
    if(sp_name.value == ''){
        alert('이름을 입력해주세요.')
        e.preventDefault();
        return false;
    }
    //아이디 검사
    if(sp_id.value == ''){
        alert('아이디를 입력해주세요.')
        e.preventDefault();
        return false;
    }
    //비밀번호 검사
    let num = sp_pwd.value.search(/[0-9]/g);
    let eng = sp_pwd.value.search(/[a-z]/ig);
    let spe = sp_pwd.value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if(sp_pwd.value == ''){
        alert('비밀번호를 입력해주세요.')
        e.preventDefault();
        return false;
    } else if(sp_pwd.value.length < 8 || sp_pwd.value.length > 15){
        alert('8자리 ~ 15자리 이내로 입력해주세요.')
        e.preventDefault();
        return false;
    } else if(sp_pwd.value.search(/\s/) != -1){
        alert('비밀번호는 공백없이 입력해주세요.')
        e.preventDefault();
        return false;
    } else if(num < 0 || eng < 0 || spe < 0 ){
        alert('영문,숫자,특수문자를 혼합하여 입력해주세요.')
        e.preventDefault();
        return false;
    }
    //이메일 검사
    if(sp_email.value == ''){
        alert('이메일을 입력해주세요.')
        e.preventDefault();
        return false;
    } else if(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(sp_email.value) == false){
        alert('이메일 형식이 올바르지 않습니다.')
        e.preventDefault();
        return false;
    }
    //전화번호 검사
    if(sp_p_num.value == ''){
        alert('전화번호를 입력해주세요.')
        e.preventDefault();
        return false;
    } 
}

btnClick.addEventListener('click', signupCheck);