(function () {
  function initCardinalNav() {
    const nav = document.querySelector(".site-nav");
    const toggle = document.querySelector(".site-nav__toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const backdrop = mobileNav?.querySelector(".mobile-nav__backdrop");
    const closeBtn = mobileNav?.querySelector(".mobile-nav__close");
    const panel = mobileNav?.querySelector(".mobile-nav__panel");
    const progress = document.querySelector(".nav-progress");

    if (toggle?.dataset.bound === "true") return;
    if (toggle) toggle.dataset.bound = "true";

    function openMobileNav() {
      if (!mobileNav || !toggle) return;
      mobileNav.classList.add("is-open");
      mobileNav.removeAttribute("aria-hidden");
      mobileNav.removeAttribute("inert");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("nav-open");

      if (typeof gsap !== "undefined" && panel && backdrop) {
        gsap.set(panel, { y: "100%" });
        gsap.set(backdrop, { opacity: 0 });
        gsap.to(backdrop, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(panel, { y: "0%", duration: 0.45, ease: "power3.out" });
      }
    }

    function closeMobileNav() {
      if (!mobileNav || !toggle) return;

      const finish = () => {
        mobileNav.classList.remove("is-open");
        mobileNav.setAttribute("aria-hidden", "true");
        mobileNav.setAttribute("inert", "");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      };

      if (typeof gsap !== "undefined" && panel && backdrop) {
        gsap.to(backdrop, { opacity: 0, duration: 0.25, ease: "power2.in" });
        gsap.to(panel, {
          y: "100%",
          duration: 0.35,
          ease: "power3.in",
          onComplete: finish,
        });
      } else {
        finish();
      }
    }

    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        if (mobileNav.classList.contains("is-open")) closeMobileNav();
        else openMobileNav();
      });

      backdrop?.addEventListener("click", closeMobileNav);
      closeBtn?.addEventListener("click", closeMobileNav);

      mobileNav.querySelectorAll(".mobile-nav__list a").forEach((a) => {
        a.addEventListener("click", closeMobileNav);
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
          closeMobileNav();
        }
      });
    }

    if (nav?.dataset.scrollBound !== "true") {
      nav.dataset.scrollBound = "true";
      let scrollTicking = false;
      window.addEventListener(
        "scroll",
        () => {
          if (scrollTicking) return;
          scrollTicking = true;
          requestAnimationFrame(() => {
            const y = window.scrollY;
            if (nav) nav.classList.toggle("is-scrolled", y > 16);
            if (progress) {
              const doc = document.documentElement;
              const max = doc.scrollHeight - doc.clientHeight;
              progress.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
            }
            scrollTicking = false;
          });
        },
        { passive: true }
      );
    }

    const desktopMenu = document.querySelector(".site-nav__menu");
    if (desktopMenu && desktopMenu.dataset.bound !== "true") {
      desktopMenu.dataset.bound = "true";

      document.addEventListener("click", (e) => {
        if (!desktopMenu.open) return;
        if (!desktopMenu.contains(e.target)) desktopMenu.open = false;
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && desktopMenu.open) desktopMenu.open = false;
      });

      desktopMenu.querySelectorAll(".site-nav__submenu a").forEach((link) => {
        link.addEventListener("click", () => {
          desktopMenu.open = false;
        });
      });
    }

    if (!document.body.dataset.cursorBound && document.querySelector(".cursor-glow")) {
      document.body.dataset.cursorBound = "true";
      const glow = document.querySelector(".cursor-glow");
      if (glow && window.matchMedia("(pointer: fine)").matches && window.innerWidth > 1024) {
        document.addEventListener(
          "mousemove",
          (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
            glow.classList.add("is-active");
          },
          { passive: true }
        );
        document.addEventListener("mouseleave", () => glow.classList.remove("is-active"));
      }
    }
  }

  window.initCardinalNav = initCardinalNav;

  if (window.__cardinalLayoutReady) {
    initCardinalNav();
  } else {
    document.addEventListener("cardinal:layout-ready", initCardinalNav, { once: true });
  }
})();
