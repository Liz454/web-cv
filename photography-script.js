//global
var navHeights = 100;

//on load functions
$(function() {
  importImages("album1", 10);
  layout();
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
  var iwidths;

  for (var i = 0; i < itotal; i++) {
    imgs.append(
      "<img class='image' src='images/photography-images/" +
        folder +
        "/" +
        i +
        ".jpg'>"
    );
  }
  $(".image").css("height", $(document).height() - navHeights);

  $(".image").each(function() {
    console.log($(this)[0].clientWidth);
    iwidths += $(this).width();
  });
  console.log(iwidths);

  // $('.images-container').css("width", )
}

//https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c
$(".images-container").draggable({
  axis: "x",
  cursor: "move",
  containment: "images"
});
