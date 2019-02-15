CustomEase.create("BiA", "0.19, 1, 0.22, 1");
CustomEase.create("AWW", "0.215, 0.61, 0.355, 1");

// Featured video load up
TweenMax.to(".video", 3, {
  y: 0,
  opacity: 1,
  ease: "BiA"
});

// TransitionIn sequence for elements
$(".transitionIn").each(function() {
  var transitionIn = this;

  var tweenIn = new TimelineMax().from(transitionIn, 3, {
    y: "30",
    opacity: "0",
    delaY: 0.5,
    ease: "BiA"
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: transitionIn,
    offset: -$(window).height() * 0.25
  })
    .setTween(tweenIn)
    .addTo(controller);
});
