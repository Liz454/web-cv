
//Scroll nav
$( window ).scroll(function() {
    if ($(document).scrollTop() > $('#about').offset().top - 50) {
        $("#nav").addClass("navbar-scrolled");
    }else{
        $("#nav").removeClass("navbar-scrolled");
    }
});


//Set skill values
$( window ).on("load", function() {
    var skills = $(".skill_item");
    var skillNum = skills.length;
    var graphics = $('.skill_graphic__c');
    for (i=0; i<skillNum; i++){
        var skillVal = skills[i].dataset.skillLevel;
        var graphic = graphics[i];
        graphic.setAttribute("style", "width: " + skillVal + "%");
    }
});

//set work container height, and adjust the line height and position on first and last cards
$( window ).on("load", function() {
    var workCards = $('.work_card');
    workCards.each(function(){
        //iterating through each card

        //get height of right container and apply it to all elements in that card
        

    });
});


//timeline circle
$( window ).scroll(function() {
    var s = $(document).scrollTop();
    var windowHeight = $( window ).height();
    var halfWindow = windowHeight/3;

    var workCards = $('.work_card');
    var firstCardTop = workCards.first().offset().top;
    var lastCardTop = workCards.last().offset().top + 20;

    var topScrollSection = firstCardTop - halfWindow;
    var bottomScrollSection = lastCardTop - halfWindow;

    //inside the work section
    if ( (s > topScrollSection) && (s < bottomScrollSection)){
        $("#timeline_circle").css({
            "position": "fixed",
            "top" : halfWindow
        });
    //below work section
    }else if(s > bottomScrollSection){
        $("#timeline_circle").css({ 
            "position": "absolute",
            "top" : lastCardTop
        });
    //above work section
    }else{
        $("#timeline_circle").css({ 
            "position": "static",
            "top" : firstCardTop
        });
    }
});







/////////////////////////not currently used///////////////////////////////////

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

//work card heights, window.onresize = setEqualHeight;
function setEqualHeight(){
    var workCards = $('.work_card__right');

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