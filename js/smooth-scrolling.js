var body = document.body,
  jsScroll = document.getElementsByClassName("js-scroll")[0],
  height = jsScroll.getBoundingClientRect().height - 10,
  speed = 0.033;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  jsScroll.style.transform = scroll;

  window.requestAnimationFrame(smoothScroll);
}
smoothScroll();
