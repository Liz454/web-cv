window.onscroll = scrollNav;
window.onload = setEqualHeight;
window.onresize = setEqualHeight;

//work card heights
function setEqualHeight(){
    var workCards = $('.work-card__inner');

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

//change nav background
function scrollNav(){
    if ($(document).scrollTop() > $('#about').offset().top - 50) {
        $("#nav").addClass("navbar-scrolled");
    }else{
        $("#nav").removeClass("navbar-scrolled");
    }
}

//change to jquery
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

// function setSkillValue(){
var skills = $(".skill_item");
var skillNum = skills.length;
var graphics = $('.skill_graphic__color');

for (i=0; i<skillNum; i++){
    var skillVal = skills[i].dataset.skillLevel;
    var graphic = graphics[i];
    graphic.setAttribute("style", "width: " + skillVal + "%");
    console.log("skillVal:", skillVal);
    console.log("graphic:", graphic);
}
