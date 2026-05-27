(function () {
  function isItemDone(li) {
    return li.classList.contains("done") || li.classList.contains("is-done");
  }

  function updatePhaseStatus() {
    document.querySelectorAll(".phase").forEach((phase) => {
      const items = [...phase.querySelectorAll(".checklist li")];
      const status = phase.querySelector(".phase__status");
      if (!status || !items.length) return;

      const doneCount = items.filter(isItemDone).length;
      const forcedComplete = phase.classList.contains("is-complete");

      status.classList.remove("phase__status--complete");

      if (forcedComplete || doneCount === items.length) {
        status.textContent = "complete";
        status.classList.add("phase__status--complete");
        if (doneCount === items.length && !forcedComplete) {
          phase.classList.add("is-complete");
        }
      } else if (doneCount === 0) {
        status.textContent = "not started";
      } else {
        status.textContent = doneCount + " / " + items.length;
      }
    });
  }

  function init() {
    updatePhaseStatus();
  }

  if (window.__cardinalLayoutReady) init();
  else document.addEventListener("cardinal:layout-ready", init);
})();
