function scrollNav(){
    const nav = document.getElementById("navbar")
    const navLinks = document.getElementsByClassName("nav-link")
    if (document.documentElement.scrollTop > 300) {
        nav.classList.add("navbar-scrolled")
        for (var x in navLinks){
            navLinks[x].classList.remove("nav-link-s")
        }
    }else{
        nav.classList.remove("navbar-scrolled")
        for (var x in navLinks){
            navLinks[x].classList.add("nav-link-s")
        }
    }
}