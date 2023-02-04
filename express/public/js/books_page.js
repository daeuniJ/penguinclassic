//탭
function tabOpen(e, tabName){
    e.preventDefault();
    let tabContent = document.getElementsByClassName("booksTabcont");
    for(i=0; i<tabContent.length; i++){
        console.log(tabContent);
        tabContent[i].style.display ='none';
    }
    document.getElementById(tabName).style.display = 'block';



    let booksTablink = document.getElementsByClassName("booksTablink");
    for(let i=0; i<booksTablink.length; i++){
        booksTablink[i].className = booksTablink[i].className.replace(' active' , ' ');
    }
    e.currentTarget.className += ' active';
}


