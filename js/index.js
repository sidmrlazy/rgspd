$(document).ready(function () {
  var url = window.location.href;
  if (url == "http://localhost/gizmmo/rgspd/index.php") {
    $("#homebackground").addClass("bg-img-about");
  } else if (url == "http://localhost/gizmmo/rgspd/about.php") {
    $("#homebackground").addClass("bg-img");
  } else if (url == "http://localhost/gizmmo/rgspd/publication.php") {
    $("#homebackground").addClass("bg-img-publication");
  } else if (url == "http://localhost/gizmmo/rgspd/publication.php#") {
    $("#homebackground").addClass("bg-img-publication");
  } else if (url == "http://localhost/gizmmo/rgspd/contact.php") {
    $("#homebackground").addClass("bg-img-contact");
  }
});
