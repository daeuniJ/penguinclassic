let headerWrap = document.querySelector('.headerWrap');
let headerHeight = headerWrap.offsetHeight;
let gnbA = document.querySelectorAll('.gnbA');
let logo = document.querySelector('.logo');
let h_line = document.querySelectorAll('.h_line'); 
let h_openBar = document.querySelector('.h_openBar');
let gnb = document.querySelector('.gnb');

window.addEventListener('scroll',() => {
    let windowTop = window.scrollY;

    if(windowTop > headerHeight) {
        headerWrap.classList.add('active');
        gnb.classList.add('bgColor');
         for(i=0; i<gnbA.length; i++) {
            gnbA[i].classList.add('active');
        }
        document.getElementById("logo_imgTop").src = '../img/header/펭귄-가로-로고.png';
        logo.classList.add('active');
    } else {
        headerWrap.classList.remove('active');
        gnb.classList.remove('bgColor');
        for(i=0; i<gnbA.length; i++) {
            gnbA[i].classList.remove('active');
            document.getElementById("logo_imgTop").src = '../img/header/펭귄.png';
            logo.classList.remove('active');
        }
    }
})

//모바일 메뉴
h_openBar.addEventListener('click',function() {
    h_openBar.classList.toggle('active');
    gnb.classList.toggle('active');
    for(let i=0; i<h_line.length; i++){
        h_line[i].style.transitionDuration = '0.3s';
    }
});


