window.addEventListener("load", () => {
  const teaserList = document.querySelector(".app-teaser-list");
  const teasers = Array.from(document.querySelectorAll(".app-teaser"));
  const liveRegion = document.querySelector(".app-section__live-region");
  const loadButton = document.querySelector(".app-load-button");
  const resetButton = document.querySelector(".app-reset-button");

  loadButton?.addEventListener("click", () => {
    teaserList.removeAttribute("style");
    liveRegion.innerText = "Loading cars...";
    teaserList.scrollIntoView();

    setTimeout(() => {
      teasers.forEach((teaser) => {
        const skeleton = teaser.querySelector(".app-teaser__skeleton");
        const content = teaser.querySelector(".app-teaser__content");

        skeleton?.setAttribute("aria-hidden", "true");
        content?.setAttribute("aria-busy", "false");
      });

      liveRegion.innerText = "Cars loaded.";
    }, 5000);
  });

  resetButton?.addEventListener("click", () => {
    const dialog = document.getElementById(
      resetButton.getAttribute("aria-controls") ?? ""
    );

    resetButton.setAttribute("aria-expanded", "true");
    dialog.showModal();

    dialog.addEventListener("close", () => {
      resetButton.setAttribute("aria-expanded", "false");
    });
  });

  const dialogForm = document.querySelector("dialog form");

  dialogForm.addEventListener("submit", () => {
    teasers.forEach((teaser) => {
      const skeleton = teaser.querySelector(".app-teaser__skeleton");
      const content = teaser.querySelector(".app-teaser__content");

      skeleton?.setAttribute("aria-hidden", "false");
      content?.setAttribute("aria-busy", "true");
    });

    liveRegion.innerText = "";
    teaserList.setAttribute("style", "display:none;");
  });
});
