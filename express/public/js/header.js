let headerWrap = document.querySelector('.headerWrap');
let headerHeight = headerWrap.offsetHeight;
let gnbA = document.querySelectorAll('.gnbA');
let logo = document.querySelector('.logo');


window.addEventListener('scroll',() => {
    let windowTop = window.scrollY;

    if(windowTop > headerHeight) {
        headerWrap.classList.add('active');
         for(i=0; i<gnbA.length; i++) {
            gnbA[i].classList.add('active');
        }
        document.getElementById("logo_imgTop").src = '../img/header/펭귄-가로-로고.png';
        logo.classList.add('active');
    } else {
        headerWrap.classList.remove('active');
        for(i=0; i<gnbA.length; i++) {
            gnbA[i].classList.remove('active');
            document.getElementById("logo_imgTop").src = '../img/header/펭귄.png';
            logo.classList.remove('active');
        }
    }
})
