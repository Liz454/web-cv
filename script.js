

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
        graphics[i].setAttribute("style", "width: " + skills[i].dataset.skillLevel + "%");
    }
});

//Accordion
$('.skills_container__outer').on('click', function(){
    $(this).find('.skills__inner__hidden').slideToggle();
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
        var t = $('#timeline_circle').scrollTop();
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

            
            workCards.each(function(){
                var c = $(this);
                var cardPos = c.offset().top - s;
                var newFontWeight = "normal";
                var newFontSizeLeft = "16px";

                if (halfWindow > cardPos && halfWindow < cardPos + c.height()){
                    newFontWeight = "bold";
                    newFontSizeLeft = "18px";
                }
                c.find('.work_card__left').css({
                    "font-weight": newFontWeight,
                    "font-size": newFontSizeLeft,
                })
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

    // }else{
    //     var limitLeft = $( window ).width()/4;
    //     var limitRight = $( window ).width() - limitLeft;

    //     $('.work_card').find('.work_card__left').each(function(){
    //         var newFontWeight = "normal";
    //         var newFontSizeLeft = "16px";
    //         var l = $(this);
            
    //         console.log(l.offset().left);
    //         if (l.offset().left > limitLeft && l.offset().left < limitRight){
    //             newFontWeight = "bold";
    //             newFontSizeLeft = "18px";
    //         }
    //         l.css({
    //             "font-weight": newFontWeight,
    //             "font-size": newFontSizeLeft,
    //         })
    //     });
    }
});


//////////////Photo section////////////
var photoIndex = 0;
var photosInAlbum = 8;
var photoDuration = 5000;
var carouselInterval = setInterval(changePhotoIndex, photoDuration);

function changePhotoIndex(){
    if (photoIndex + 1 < photosInAlbum){
        photoIndex += 1;
    } else {
        photoIndex = 0;
    }
    changePhoto();
}

function changePhoto(){
    //change image
    $('#carousel-image').attr("src", "images/carousel-images/" + photoIndex + ".JPG");

    //change blurb
    $('.carousel-p').addClass('hidden');
    $('.p'+ photoIndex).removeClass('hidden');

    //change carousel buttons
    $('.carousel-btn').each(function(){
        $(this).css({
            "background-image": "url('images/social-icons/circle.svg')",
        });
    });
    $('.carousel-btn').eq(photoIndex).css({
        "background-image": "url('images/social-icons/circle-filled.svg')",
    });
}

function resetInterval(){
    clearInterval(carouselInterval);
    carouselInterval = setInterval(changePhotoIndex, photoDuration);
}

//image click
$('#carousel-image').on('click', function(){
    changePhotoIndex();
    resetInterval();
});

//button click
$('.carousel-btn').on('click', function(){
    photoIndex = $(this).index();
    changePhoto();
    resetInterval();
});

//fill first button
$('.carousel-btn').eq(photoIndex).css({
    "background-image": "url('images/social-icons/circle-filled.svg')",
});


//overlay
$( window ).scroll(function() {
    if ($(window).scrollTop() > ($('#photography').offset().top - $(window).height() + $(window).height() * 0.2)){
        $('.photography-overlay').fadeIn(2000);
        $('.carousel-content').addClass('over-overlay');
    } else {
        $('.photography-overlay').fadeOut(2000);
        $('.carousel-content').removeClass('over-overlay');
    }
});


//back to top button
$('#back-to-top').on('click', function(){
    $(window).scrollTop(0);
});

//Adjust image size
function imageResize(){
    var height = "auto";
    var width = "95%";

    if ($('#carousel-image').height() > $(window).height()){
        height = "75vh";
        width = "auto"
    } 
    
    $('#carousel-image').css({
        "height": height,
        "width": width
    });
}

$( window ).on('load', function() {
    imageResize();
});

$( window ).on('resize', function() {
    imageResize();
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
