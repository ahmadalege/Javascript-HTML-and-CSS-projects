gsap.set(".box", {
  borderRadius: 100,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  yoyo: true,
  ease: "power1",
  repeat: -1,
  stagger: {
    // amount: 4,
    each: 0.5,
    from: 0,
  },
});
