(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function runLoader() {
    const loader = document.querySelector(".page-loader");
    if (!loader || prefersReduced) {
      document.body.classList.remove("is-loading");
      if (loader) loader.remove();
      return Promise.resolve();
    }

    const bar = loader.querySelector(".page-loader__bar span");
    const mark = loader.querySelector(".page-loader__mark");
    const hint = loader.querySelector(".page-loader__hint");

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove("is-loading");
        loader.remove();
      },
    });

    tl.from(mark, { duration: 0.9, opacity: 0, y: 20, filter: "blur(12px)", ease: "power3.out" })
      .from(hint, { duration: 0.6, opacity: 0, y: 10, filter: "blur(8px)", ease: "power2.out" }, "-=0.5")
      .to(bar, { duration: 1.1, width: "100%", ease: "power2.inOut" }, "-=0.3")
      .to(loader, {
        duration: 0.65,
        opacity: 0,
        filter: "blur(16px)",
        ease: "power2.inOut",
        delay: 0.15,
      });

    return tl;
  }

  function blurFadeIn(targets, vars) {
    const base = {
      opacity: 0,
      y: 36,
      filter: "blur(14px)",
      duration: 1,
      ease: "power3.out",
      ...vars,
    };
    if (prefersReduced) {
      return gsap.fromTo(targets, { opacity: 0 }, { opacity: 1, duration: 0.4, ...vars });
    }
    return gsap.from(targets, base);
  }

  function initHero() {
    const hero = document.querySelector(".hero, .page-hero");
    if (!hero) return;

    const eyebrow = hero.querySelector(".hero__eyebrow, .page-hero__icon");
    const title = hero.querySelector(".hero__title, .page-hero__title");
    const lead = hero.querySelector(".hero__lead, .page-hero__desc");
    const cta = hero.querySelector(".hero__cta");
    const scroll = hero.querySelector(".hero__scroll");
    const orbs = hero.querySelectorAll(".hero__orb");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (prefersReduced) {
      gsap.set([eyebrow, title, lead, cta, scroll].filter(Boolean), { opacity: 1 });
      return;
    }

    if (orbs.length) {
      gsap.from(orbs, {
        scale: 0.6,
        opacity: 0,
        duration: 2.2,
        stagger: 0.2,
        ease: "power2.out",
      });
    }

    const items = [eyebrow, title, lead, cta, scroll].filter(Boolean);
    tl.from(items, {
      opacity: 0,
      y: 48,
      filter: "blur(18px)",
      duration: 1.15,
      stagger: 0.14,
    });

    if (scroll) {
      gsap.to(scroll.querySelector(".hero__scroll-line"), {
        scaleY: 1.2,
        opacity: 0.6,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "top center",
      });
    }
  }

  function initReveals() {
    const sections = document.querySelectorAll("[data-reveal]");
    if (!sections.length) return;

    sections.forEach((section) => {
      const children = section.querySelectorAll(".reveal, .reveal-group > *, .card, .tick-item, .data-table-wrap, .code-block, .metric, .event-chip");

      if (prefersReduced) {
        gsap.set(children.length ? children : section, { opacity: 1, clearProps: "filter" });
        return;
      }

      gsap.set(children.length ? children : section, {
        opacity: 0,
        y: 32,
        filter: "blur(12px)",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          const targets = children.length ? children : section;
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            stagger: children.length ? 0.08 : 0,
            ease: "power3.out",
            clearProps: "filter",
          });
        },
      });
    });
  }

  function initStoryQuotes() {
    document.querySelectorAll(".story__quote").forEach((q) => {
      if (prefersReduced) return;
      ScrollTrigger.create({
        trigger: q,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.from(q, {
            opacity: 0,
            x: -24,
            filter: "blur(10px)",
            duration: 1.1,
            ease: "power3.out",
            clearProps: "filter",
          });
        },
      });
    });
  }

  function initCardsHover() {
    if (prefersReduced) return;
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -4, duration: 0.35, ease: "power2.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.45, ease: "power2.out" });
      });
    });
  }

  function initNavLinks() {
    if (prefersReduced) return;
    document.querySelectorAll(".site-nav__links a, .mobile-nav__list a").forEach((link) => {
      const icon = link.querySelector("svg, [data-lucide]");
      if (!icon || !link.closest(".site-nav__desktop")) return;
      link.addEventListener("mouseenter", () => {
        gsap.to(icon, { x: 2, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(icon, { x: 0, duration: 0.25, ease: "power2.out" });
      });
    });
  }

  function initParallax() {
    if (prefersReduced) return;
    document.querySelectorAll("[data-parallax]").forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      gsap.to(el, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }

  function initPageEnter() {
    if (prefersReduced) return;
    const visited = sessionStorage.getItem("cardinal-visited");
    if (!visited) {
      sessionStorage.setItem("cardinal-visited", "1");
      return;
    }
    gsap.from("main", {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.7,
      ease: "power2.out",
      clearProps: "filter",
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    runLoader().then(() => {
      initPageEnter();
      initHero();
      initReveals();
      initStoryQuotes();
      initCardsHover();
      initNavLinks();
      initParallax();

      ScrollTrigger.refresh();
    });
  });
})();
