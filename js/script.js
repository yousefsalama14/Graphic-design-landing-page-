// When the user scrolls down 200px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (86px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-86px";
  }
}