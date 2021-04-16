$(document).ready(function () {
  var fullurl = window.location.href;
  var url = fullurl.split("/").reverse()[0];
  if (url == "index.php") {
    $("#homebackground").addClass("bg-img-about");
  } else if (url == "about.php") {
    $("#homebackground").addClass("bg-img");
  } else if (url == "publication.php") {
    $("#homebackground").addClass("bg-img-publication");
  } else if (url == "publication.php#") {
    $("#homebackground").addClass("bg-img-publication");
  } else if (url == "contact.php") {
    $("#homebackground").addClass("bg-img-contact");
  } else if (url == "rgspd/") {
    $("#homebackground").addClass("bg-img-contact");
  }
});
