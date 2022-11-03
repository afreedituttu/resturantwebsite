let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

var bool = true;
menu.onclick = () =>{
    navbar.classList.toggle('active');
    if(bool){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
        bool = false
    }else{
        console.log('entered');
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
        bool = true
    }
    console.log(bool)
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = fadeOut;