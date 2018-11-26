window.onscroll = scrollNav;
window.onload = setEqualHeight;
window.onresize = checkIfResize;

function checkIfResize(){
    var w = window.innerWidth;
    if(w % 5 == 0 || w == 767 || w == 770) {
        setEqualHeight();
    }
}

//work card heights
function setEqualHeight(){
    console.log("!!!");
    var workCards = document.getElementsByClassName('work-card__inner');
    for (var z in workCards){
        if (workCards[z].clientHeight != undefined){
            workCards[z].setAttribute("style", "height: auto");
        }
    } 
    var height = 0;
    for (var x in workCards){
        var curr = workCards[x];
        if (curr.clientHeight != undefined && curr.clientHeight > height){
            height = curr.clientHeight;
        }
    }
    for (var y in workCards){
        if (workCards[y].clientHeight != undefined){
            workCards[y].setAttribute("style", "height:" + height + "px");
        }
    }  

}


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
