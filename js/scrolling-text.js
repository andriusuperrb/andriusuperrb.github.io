// Code source: https://codepen.io/drewhaas/pen/vaEpvy
// TODO: make this more dynamic
var $textRegular1 = $(".st-1");
var $textInverse = $(".st-2");
var $textRegular2 = $(".st-3");

var text1w = $(".st-1").width();
var text2w = $(".st-2").width();
var text3w = $(".st-2").width();

var windowHeight = $(window).height();
var windowWidth = $(window).width();
var oldScrollP, scrollP;
var controller = new ScrollMagic.Controller();

// TODO: use acutal text width
console.log(text2w + windowWidth);
TweenMax.set($textInverse, { x: -text2w });
TweenMax.to($textRegular1, 250, { x: "-100%" });
TweenMax.to($textRegular2, 250, { x: "-100%" });
TweenMax.to($textInverse, 180, { x: "100%" });

// TODO: make sure text never stops moving
var textScene1 = new ScrollMagic.Scene({
  duration: windowHeight,
  triggerElement: ".container",
  triggerHook: 0
})
  .addTo(controller)
  .on("progress", function(e) {
    TweenMax.to($textRegular1, 3, { x: -e.progress * 250, ease: Expo.easeOut });
  });

var textScene2 = new ScrollMagic.Scene({
  duration: windowHeight,
  triggerElement: ".container",
  triggerHook: 0
})
  .addTo(controller)
  .on("progress", function(e) {
    //console.log(e.progress);
    var xstart = -(text2w + windowWidth + 400);
    //TweenMax.to($textInverse, 3, {x: (e.progress) * 250, ease: Expo.easeOut});
  });

var textScene3 = new ScrollMagic.Scene({
  duration: windowHeight,
  triggerElement: ".container",
  triggerHook: 0
})
  .addTo(controller)
  .on("progress", function(e) {
    TweenMax.to($textRegular2, 3, { x: -e.progress * 250, ease: Expo.easeOut });
  });

$("html").on("wheel", function(e) {
  scrollP = window.scrollY;

  if (scrollP > oldScrollP) {
    // going down
    console.log("going down");
    //TweenMax.to($text, 2, {x: '-100%'});
  } else if (scrollP < oldScrollP) {
    // going up
    console.log("going up");
  }

  oldScrollP = scrollP;
});
