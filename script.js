function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".scroll-progress", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

  const desktopNav = document.querySelector("#desktop-nav");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      desktopNav?.classList.add("scrolled-nav");
      hamburgerNav?.classList.add("scrolled-nav");
    } else {
      desktopNav?.classList.remove("scrolled-nav");
      hamburgerNav?.classList.remove("scrolled-nav");
    }
  });

  gsap.from(".hero-highlight", {
    opacity: 0,
    y: 30,
    duration: 8,
    ease: "power3.out",
  });

  gsap.from(".gsap-project", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 40%",
    },
    opacity: 0,
    y: 90,
    stagger: 0.3,
    duration: 0.8,
    ease: "power3.out",
  });
});
