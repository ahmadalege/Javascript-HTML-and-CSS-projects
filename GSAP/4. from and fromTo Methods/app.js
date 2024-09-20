// from = You dont have to specify the default value

// gsap.from(".box1", {
//   y: -200,
//   duration: 3,
//   ease: "linear",
// });

// fromTo = You have to specify the default value
gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: "100px",
    repeat: -1,
    yoyo: true,
  }
);
