(function () {
  const NAV = [
    { href: "/", label: "Overview", icon: "home" },
    { href: "/philosophy.html", label: "Philosophy", icon: "compass" },
    { href: "/world.html", label: "World", icon: "globe" },
    { href: "/agents.html", label: "Agents", icon: "users" },
    { href: "/memory.html", label: "Memory", icon: "brain" },
    { href: "/generations.html", label: "Generations", icon: "git-branch" },
    { href: "/emergence.html", label: "Emergence", icon: "sparkles" },
    { href: "/simulation.html", label: "Simulation", icon: "activity" },
    { href: "/observer.html", label: "Observer", icon: "eye" },
  ];

  const raw = window.location.pathname;
  let current = raw.replace(/\/$/, "") || "/";
  if (current === "/index.html") current = "/";
  if (current !== "/" && !current.endsWith(".html")) {
    current = current + ".html";
  }

  const menu = document.createElement("div");
  menu.className = "context-menu";
  menu.id = "context-menu";
  menu.setAttribute("role", "menu");
  menu.setAttribute("aria-label", "Quick navigation");
  menu.hidden = true;

  menu.innerHTML =
    '<div class="context-menu__head">Navigate</div><ul class="context-menu__list">' +
    NAV.map(({ href, label, icon }) => {
      const cur = href === current ? ' aria-current="page"' : "";
      return (
        '<li role="none"><a role="menuitem" href="' +
        href +
        '"' +
        cur +
        '><i data-lucide="' +
        icon +
        '" width="16" height="16"></i><span>' +
        label +
        "</span></a></li>"
      );
    }).join("") +
    "</ul>";

  document.body.appendChild(menu);

  let open = false;

  function hideMenu() {
    if (!open) return;
    open = false;
    menu.hidden = true;
    menu.classList.remove("is-visible");
  }

  function showMenu(x, y) {
    menu.hidden = false;
    menu.classList.add("is-visible");
    open = true;

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    const pad = 8;
    const rect = menu.getBoundingClientRect();
    let left = x;
    let top = y;

    if (left + rect.width > window.innerWidth - pad) {
      left = window.innerWidth - rect.width - pad;
    }
    if (top + rect.height > window.innerHeight - pad) {
      top = window.innerHeight - rect.height - pad;
    }
    if (left < pad) left = pad;
    if (top < pad) top = pad;

    menu.style.left = left + "px";
    menu.style.top = top + "px";
  }

  document.addEventListener("contextmenu", (e) => {
    if (e.target.closest("input, textarea, [contenteditable='true']")) return;
    e.preventDefault();
    showMenu(e.clientX, e.clientY);
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) hideMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideMenu();
  });

  window.addEventListener("blur", hideMenu);
  window.addEventListener("scroll", hideMenu, { passive: true });
  window.addEventListener("resize", hideMenu);
})();
