

//Scroll nav
$( window ).scroll(function() {
    if ($(document).scrollTop() > $('#about').offset().top - 50) {
        $("#nav").addClass("navbar-scrolled");
    }else{
        $("#nav").removeClass("navbar-scrolled");
    }
});


//////////////Skills section////////////

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


//////////////Work section////////////

//line height and card height
$(document).ready(workSection);
$(window).resize(workSection);

function workSection() {

    //reset
    $('.work_card').each(function(){
        $(this).css({
            "height": "auto",
        });
        $(this).find('p').css({
            "margin-top": "0"
        })
    });
    $('.work_card-container--inner').css({
        "padding": "0",
        "height": "auto",
        "width": "auto"
    });


    if ($(window).width() >= 768){ //Desktop ------------------------
        console.log("desktop");
        var workCards = $('.work_card');

        workCards.each(function(){
            //set height of each card
            var rightHeight = $(this).find(".work_card__right").height();
            $(this).height(rightHeight);

            //vertically center content of left card
            var leftHeight = $(this).find(".work_card__left").height();
            var innerLeft = $(this).find(".work_card__left").children().first();
            var innerLeftHeight = innerLeft.height();
            var leftTopMargin = (leftHeight - innerLeftHeight) / 2;
            innerLeft.css("margin-top", leftTopMargin);
            
        });

        //set line height for first card
        var firstCard = workCards.first();
        var firstMiddle = firstCard.find(".work_card__middle");
        var firstHeight = firstCard.height()/2;
        firstMiddle.css({
            "margin-top" : firstHeight,
            "height" : firstHeight
        });

        //set line height for last card
        var lastCard = workCards.last();
        var lastMiddle = lastCard.find(".work_card__middle");
        var lastHeight = lastCard.height()/2;
        lastMiddle.css({
            "margin-bottom" : lastHeight,
            "height" : lastHeight
        });


    }else{ //Mobile ----------------------------------
        console.log("mobile");
        var cumu_width = 0;
        var workCards = $('.work_card');
        var container_padding = ($(window).width() * 0.3)/2 - 20;
        var maxHeight = 0;
        
        workCards.each(function(){
            cumu_width += $(this).outerWidth();
            cumu_width += 20;
            if ($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        });
        workCards.each(function(){
            $(this).css({"height": (maxHeight + 20) + "px"})
        });
        $('.work_card-container--inner').css({
            "width": cumu_width + "px",
            "height": (maxHeight + 80) + "px",
            "padding": "0 " + container_padding + "px"
        });
    }
}

//timeline circle
$( window ).scroll(function() {
    if ($(window).width() >= 768){
        var s = $(document).scrollTop();
        var windowHeight = $( window ).height();
        var halfWindow = windowHeight/3;

        var workCards = $('.work_card');
        var firstCard = workCards.first().offset().top + workCards.first().height()/2;
        var lastCard = workCards.last().offset().top + workCards.last().height()/2;

        var topScrollSection = firstCard - halfWindow;
        var bottomScrollSection = lastCard - halfWindow;

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
                "top" : lastCard
            });

        //above work section
        }else{
            $("#timeline_circle").css({ 
                "position": "absolute",
                "top" : firstCard
            });
        }
    }
});




/////////////////////////not currently used///////////////////////////////////

/////tab function
// function otherTabs(contentName){
//     var hide = document.getElementsByClassName('other-active');
//     hide[0].classList.add('hidden');
//     hide[0].classList.remove("other-active");
//     var hideBtn = document.getElementsByClassName('other__btn--active');
//     hideBtn[0].classList.remove('other__btn--active');

//     var show = document.getElementById(contentName);
//     show.classList.add('other-active');
//     show.classList.remove('hidden');
//     var showBtn = document.getElementById(contentName + "-btn");
//     showBtn.classList.add('other__btn--active');
// }



////////work card heights, window.onresize = setEqualHeight;
// function setEqualHeight(){
//     var workCards = $('.work_card__right');

//     for (var z in workCards){
//         if (workCards[z].clientHeight != undefined){
//             workCards[z].setAttribute("style", "height: auto");
//         }
//     } 
//     var height = 0;
//     for (var x in workCards){
//         var curr = workCards[x];
//         if (curr.clientHeight != undefined && curr.clientHeight > height){
//             height = curr.clientHeight;
//         }
//     }
//     for (var y in workCards){
//         if (workCards[y].clientHeight != undefined){
//             workCards[y].setAttribute("style", "height:" + height + "px");
//         }
//     }  
// }