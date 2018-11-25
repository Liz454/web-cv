window.onscroll = scrollNav;

function scrollNav(){
    const nav = document.getElementById("nav")
    // const navLinks = document.getElementsByClassName("nav-link")
    if (document.documentElement.scrollTop > 500) {
        nav.classList.add("navbar-scrolled")
        // for (var x in navLinks){
        //     navLinks[x].classList.remove("nav-link-s")
        // }
    }else{
        nav.classList.remove("navbar-scrolled")
        // for (var x in navLinks){
        //     navLinks[x].classList.add("nav-link-s")
        // }
    }
}

function otherTabs(contentName){

    var hide = document.getElementsByClassName('other-active');
    hide[0].classList.add('hidden');
    hide[0].classList.remove("other-active");
    var hideBtn = document.getElementsByClassName('other__btn--active');
    hideBtn[0].classList.remove('other__btn--active');

    var show = document.getElementById(contentName);
    show.classList.add('other-active');
    show.classList.remove('hidden');
    var showBtn = document.getElementById(contentName + "-btn");
    showBtn.classList.add('other__btn--active');
}
