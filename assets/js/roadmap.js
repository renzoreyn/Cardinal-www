(function () {
  function isItemDone(li) {
    return li.classList.contains("done") || li.classList.contains("is-done");
  }

  function setPhaseStatus(phase, status, text) {
    if (!status) return;
    status.classList.remove("phase__status--complete");
    status.textContent = text;
    if (text === "completed") {
      status.classList.add("phase__status--complete");
    }
  }

  function updatePhaseStatus() {
    document.querySelectorAll(".phase").forEach((phase) => {
      const items = [...phase.querySelectorAll(".checklist li")];
      const status = phase.querySelector(".phase__status");
      if (!status) return;

      const doneCount = items.filter(isItemDone).length;
      const forcedComplete = phase.classList.contains("is-complete");
      const allDone = items.length > 0 && doneCount === items.length;

      if (forcedComplete || allDone) {
        setPhaseStatus(phase, status, "completed");
        if (allDone) phase.classList.add("is-complete");
        return;
      }

      if (doneCount === 0) {
        setPhaseStatus(phase, status, "not started");
        return;
      }

      setPhaseStatus(phase, status, doneCount + " / " + items.length);
    });
  }

  function init() {
    updatePhaseStatus();
  }

  window.updateRoadmapPhases = updatePhaseStatus;

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("cardinal:layout-ready", init);

  if (document.readyState === "complete" || document.readyState === "interactive") {
    init();
  }
})();
