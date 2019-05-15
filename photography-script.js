//global variables
var navHeights = 100;



//on load functions
$(function() {
    layout();
    importImages("album1", 10);

});

//on resize functions
$("document").on("resize", function() {
  layout();
});





function layout() {
  $("#images").css("height", $(document).height() - navHeights);
}



function importImages(folder, itotal) {
  var imgs = $("#images").find(".images-container");

  for (var i = 0; i < itotal; i++) {
    imgs.append(
      "<img id='image" + i + "' class='image' src='images/photography-images/" + folder + "/" + i + ".jpg'>"
    );
  }

  $(".image").css("height", $(document).height() - navHeights);
  
}
