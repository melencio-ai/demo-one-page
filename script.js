const header = document.querySelector("[data-site-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navLinks = [...document.querySelectorAll('a[href^="#"]')];
const desktopLinks = [...document.querySelectorAll(".desktop-nav a")];

const setScrolled = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  mobileMenu.hidden = true;
  header.classList.remove("is-menu-open");
  document.body.classList.remove("menu-open");
};

const openMenu = () => {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  mobileMenu.hidden = false;
  header.classList.add("is-menu-open");
  document.body.classList.add("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

window.addEventListener("scroll", setScrolled, { passive: true });
setScrolled();

const sectionIds = ["solutions", "why-ordio", "demo", "process", "customers", "faq"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      desktopLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${visible.target.id}`
        );
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.01, 0.2, 0.5]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1050) closeMenu();
});


const demoSamples = [...document.querySelectorAll("[data-demo-sample]")];
const demoTitle = document.querySelector("[data-demo-title]");
const demoMeta = document.querySelector("[data-demo-meta]");

demoSamples.forEach((sample) => {
  sample.addEventListener("click", () => {
    demoSamples.forEach((item) => item.classList.remove("is-active"));
    sample.classList.add("is-active");

    if (demoTitle) demoTitle.textContent = sample.dataset.title || "";
    if (demoMeta) demoMeta.textContent = sample.dataset.meta || "";
  });
});
