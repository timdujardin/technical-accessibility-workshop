window.addEventListener("load", () => {
  const form = document.querySelector(".app-form");
  const requiredFields = Array.from(form.querySelectorAll("[required]"));
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    requiredFields.forEach((field) => {
      const errorId = `${field.getAttribute("id")}-error`;
      const ariaDescribedBy = field.getAttribute("aria-describedby");

      field.setAttribute("aria-invalid", "true");
      field.setAttribute(
        "aria-describedby",
        ariaDescribedBy ? [errorId, ariaDescribedBy].join(" ") : errorId
      );
      field.insertAdjacentHTML(
        "afterend",
        `<p class="error" id="${errorId}">${
          field.getAttribute("data-error-text") ?? "This value is incorrect."
        }</p>`
      );
    });

    form.insertAdjacentHTML(
      "beforebegin",
      `
      <div class="app-status-message app-status-message--error">
        <span id="app-status-message-title">4 errors found:</span>
        <ul role="list" class="app-comma-list" tabindex="-1" aria-labelledby="app-status-message-title">
          <li><a href="#firstname">Firstname</a></li>
          <li><a href="#lastname">Lastname</a></li>
          <li><a href="#reg-num">Vehicle registration number</a></li>
          <li><a href="#additional-info">Additional vehicle requests</a></li>
        </ul>
      </div>
      `
    );

    document.querySelector(".app-status-message > ul")?.focus();
  });
});
