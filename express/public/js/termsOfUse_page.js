let useCheckBox = document.getElementById("agreement1");
let personCheckBox = document.getElementById("agreement2");
let touBtn = document.querySelector(".touBtn");
let touForm = document.querySelector(".touForm");


touBtn.addEventListener('click',()=>{
    if(useCheckBox.checked == true){
        touForm.action = '/signUp'
    } else{
        alert('필수 약관에 동의해주세요.')
        touForm.action = '/termsOfUse'
    }
})

