CustomEase.create("BiA", "0.19, 1, 0.22, 1");
CustomEase.create("AWW", "0.215, 0.61, 0.355, 1");

// h1 load up
TweenMax.to(".video", 3, {
  y: 0,
  opacity: 1,
  ease: "BiA"
});

// 1. project title transition animation
var transitionIn = TweenMax.staggerFrom(
  ".transitionIn",
  2,
  {
    y: "20",
    opacity: "0",
    delaY: 0.1,
    ease: "BiA"
  },
  0.2
);
// 1. project title transition scene
var scene = new ScrollMagic.Scene({
  triggerElement: ".transitionIn",
  triggerHook: "onEnter",
  offset: 20
})
  .setTween(transitionIn)
  .addTo(controller);

// // build scene
// var scene2 = new ScrollMagic.Scene({
//   triggerElement: ".project__2",
//   triggerHook: "onEnter",
//   offset: 20,
//   duration: 3000
// })
//   .setTween(".text-scroll", {
//     x: "-50%",
//     y: 800,
//     force3D: true
//   })
//   .addTo(controller);
