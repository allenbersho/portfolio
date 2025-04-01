const tl = gsap.timeline({ delay: 3, repeat: -1 });
tl.to(".text h3 span", {
  duration: 2,
  text: " Web Programmer ",
  repeat: 1,
  yoyo: true,
});
tl.to(".text h3 span", {
  duration: 2,
  text: " UI / UX Designer ",
  repeat: 1,
  yoyo: true,
});
tl.to(".text h3 span", {
  duration: 2,
  text: " Fullstack developer ",
  repeat: 1,
  yoyo: true,
});
tl.to(".text h3 span", {
  duration: 2,
  text: " Python developer ",
  repeat: 1,
  yoyo: true,
});
tl.to(".text h3 span", {
  duration: 2,
  text: " Java developer ",
  repeat: 1,
  yoyo: true,
});

let words = gsap.utils.toArray("svg text"),
  tl2 = gsap.timeline({ delay: 0.5 }),
  timePerCharacter = 0.2;

words.forEach((el) => {
  tl2.from(el, {
    text: "",
    duration: el.innerHTML.length * timePerCharacter,
    ease: "none",
  });
});
