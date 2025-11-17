document.addEventListener('DOMContentLoaded', () => {
  let bodyClientRect = document.body.getBoundingClientRect();

  // 1. gsap.to()
  gsap.to('.box', {
    x: bodyClientRect.width,
    xPercent: -100,
    opacity: 1,
    duration: 3,
    delay: 1,
  });

  // Alternative solution using gsap.fromTo():
  // gsap.fromTo(
  //   '.box',
  //   { x: 0, opacity: 0 },
  //   {
  //     x: bodyClientRect.width,
  //     xPercent: -100,
  //     opacity: 1,
  //     delay: 1,
  //     duration: 3,
  //   }
  // );
});
