(function () {
  function esc(text) {
    const el = document.createElement("span");
    el.textContent = text;
    return el.innerHTML;
  }

  function getCurrentPath() {
    const fromBody = document.body.dataset.page;
    if (fromBody) return fromBody;

    let path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/index.html") path = "/";
    if (path !== "/" && !path.endsWith(".html")) path += ".html";
    return path;
  }

  function markCurrentPage() {
    const current = getCurrentPath();
    document.querySelectorAll(".site-nav__links a, .mobile-nav__list a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === current) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function renderHeader() {
    const nav = window.CARDINAL_NAV || [];
    const desktopLinks = nav
      .map(
        (item) =>
          `<li><a href="${item.href}"><i data-lucide="${item.icon}" width="14" height="14"></i> ${esc(item.label)}</a></li>`
      )
      .join("");
    const mobileLinks = nav
      .map(
        (item) =>
          `<li><a href="${item.href}"><span class="mobile-nav__icon"><i data-lucide="${item.icon}" width="20" height="20"></i></span>${esc(item.label)}</a></li>`
      )
      .join("");

    return `
<div class="nav-progress" aria-hidden="true"></div>
<div class="noise" aria-hidden="true"></div>
<div class="cursor-glow" aria-hidden="true"></div>

<header class="site-nav">
  <div class="site-nav__inner">
    <a href="/" class="site-nav__brand">
      <span class="site-nav__brand-icon"><i data-lucide="flame" width="22" height="22"></i></span>
      <span class="site-nav__brand-text">Cardinal</span>
    </a>
    <nav class="site-nav__desktop" aria-label="Main navigation">
      <ul class="site-nav__links">${desktopLinks}</ul>
    </nav>
    <button class="site-nav__toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
      <span class="site-nav__toggle-icon site-nav__toggle-icon--open"><i data-lucide="menu" width="22" height="22"></i></span>
      <span class="site-nav__toggle-icon site-nav__toggle-icon--close"><i data-lucide="x" width="22" height="22"></i></span>
    </button>
  </div>
</header>

<div class="mobile-nav" id="mobile-nav" aria-hidden="true" inert>
  <button type="button" class="mobile-nav__backdrop" tabindex="-1" aria-label="Close menu"></button>
  <div class="mobile-nav__panel" role="dialog" aria-label="Navigation">
    <div class="mobile-nav__head">
      <span class="mobile-nav__title">Cardinal</span>
      <button type="button" class="mobile-nav__close" aria-label="Close menu"><i data-lucide="x" width="22" height="22"></i></button>
    </div>
    <ul class="mobile-nav__list">${mobileLinks}</ul>
  </div>
</div>`;
  }

  function renderFooter() {
    const links = window.CARDINAL_FOOTER_LINKS || { core: [], systems: [] };
    const coreLinks = (links.core || [])
      .map((item) => `<li><a href="${item.href}">${esc(item.label)}</a></li>`)
      .join("");
    const systemLinks = (links.systems || [])
      .map((item) => `<li><a href="${item.href}">${esc(item.label)}</a></li>`)
      .join("");

    return `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div>
      <div class="site-footer__brand">Cardinal</div>
      <p class="site-footer__tagline">Experimental autonomous civilization simulation. Research archive.</p>
    </div>
    <div>
      <h4>Core</h4>
      <ul>${coreLinks}</ul>
    </div>
    <div>
      <h4>Systems</h4>
      <ul>${systemLinks}</ul>
    </div>
  </div>
  <div class="site-footer__bottom container">
    <span>Cardinal research documentation</span>
    <span class="site-footer__credit">made with <i data-lucide="heart" width="12" height="12" class="site-footer__heart" aria-hidden="true"></i> by <a href="https://renzoreyn.dev" target="_blank" rel="noopener noreferrer">@renzoreyn</a></span>
  </div>
</footer>`;
  }

  function mountLayout() {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = renderHeader();
    if (footer) footer.innerHTML = renderFooter();
  }

  function finishLayout() {
    markCurrentPage();

    if (typeof window.initCardinalNav === "function") {
      window.initCardinalNav();
    }

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    window.__cardinalLayoutReady = true;
    document.dispatchEvent(new CustomEvent("cardinal:layout-ready"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    try {
      mountLayout();
      finishLayout();
    } catch (err) {
      console.error("[Cardinal layout]", err);
      document.dispatchEvent(new CustomEvent("cardinal:layout-ready"));
    }
  });
})();
