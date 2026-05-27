(function () {
  function updatePhaseStatus() {
    document.querySelectorAll(".phase").forEach((phase) => {
      const items = phase.querySelectorAll(".checklist li");
      const done = phase.querySelectorAll(".checklist li.is-done").length;
      const status = phase.querySelector(".phase__status");
      if (!status || !items.length) return;

      status.classList.remove("phase__status--complete");
      if (done === 0) status.textContent = "not started";
      else if (done < items.length) status.textContent = done + " / " + items.length;
      else {
        status.textContent = "complete";
        status.classList.add("phase__status--complete");
      }
    });
  }

  function init() {
    updatePhaseStatus();
  }

  if (window.__cardinalLayoutReady) init();
  else document.addEventListener("cardinal:layout-ready", init);
})();
