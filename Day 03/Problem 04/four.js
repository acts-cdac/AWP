$(document).ready(function() {
  $("#slideshow").html("<img src='one.jpg'>");
  $("#slideshow")
    .delay("slow")
    .fadeIn();
  $("#slideshow")
    .delay("slow")
    .fadeOut();

  setTimeout(() => {
    $("#slideshow").html("<img src='two.jpg'>");
    $("#slideshow")
      .delay("slow")
      .fadeIn();
    $("#slideshow")
      .delay("slow")
      .fadeOut();
  }, 2000);
  setTimeout(() => {
    $("#slideshow").html("<img src='three.jpg'>");
    $("#slideshow")
      .delay("slow")
      .fadeIn();
    $("#slideshow")
      .delay("slow")
      .fadeOut();
  }, 4000);

  setTimeout(() => {
    $("#slideshow").html("<img src='four.jpg'>");
    $("#slideshow")
      .delay("slow")
      .fadeIn();
    $("#slideshow")
      .delay("slow")
      .fadeOut();
  }, 6000);

  setTimeout(() => {
    $("#slideshow").html("<img src='five.jpg'>");
    $("#slideshow")
      .delay("slow")
      .fadeIn();
  }, 8000);
});
