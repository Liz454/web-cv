//global
var navHeights = 100;

//on load functions
$(function(){
    importImages("album1");
    layout();
});

//on resize functions
$('document').on("resize", function(){
    layout();
});
    


function layout(){
    $("#images").css("height", $(document).height()-navHeights);
}

function importImages(folder){
    var itotal = 10;
    var imgs = $('#images').find('.images-container');
    var iwidths;
    
    for (var i = 0; i < itotal; i++) {
        imgs.append("<img class='image' src='images/photography-images/" + folder + "/" + i + ".jpg'>");
    }
    $('.image').css("height", $(document).height()-navHeights);

    $('.image').each(function(){
        console.log($(this)[0].clientWidth);
        iwidths += $(this).width();
    });
    console.log(iwidths);

    
    // $('.images-container').css("width", )
}