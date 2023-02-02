var useCheckBox = document.getElementById("agreement1");
var personCheckBox = document.getElementById("#agreement2");
var touBtn = document.querySelector(".touBtn");

let touForm = document.querySelector(".touForm");

touBtn.addEventListener('click',(e)=>{
    if(useCheckBox.checked == false && personCheckBox.checked == false){
        alert('필수 약관에 동의해주세요.');
        touForm.action = '/termsOfUse'
        return false;
    } 
})

