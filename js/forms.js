const clearErrors = () => {
  document
    .querySelectorAll(".error, .app-status-message")
    .forEach((error) => error.remove());
};

window.addEventListener("load", () => {
  const form = document.querySelector(".app-form");
  const requiredFields = Array.from(form.querySelectorAll("[required]"));
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearErrors();

    const invalidFields = [];

    requiredFields.forEach((field) => {
      if (field.validity.valid) {
        field.removeAttribute("aria-invalid");
        return;
      }

      const errorId = `${field.getAttribute("id")}-error`;
      const ariaDescribedBy = field.getAttribute("aria-describedby");

      invalidFields.push(field);

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

    // Only show validation message when required settings are correct
    if (invalidFields.length > 0) {
      form.insertAdjacentHTML(
        "beforebegin",
        `
      <div class="app-status-message app-status-message--error">
        <span id="app-status-message-title">${
          invalidFields.length
        } errors found:</span>
        <ul role="list" class="app-comma-list" tabindex="-1" aria-labelledby="app-status-message-title">
          ${invalidFields
            .map(
              (field) =>
                `<li><a href="#${field.getAttribute(
                  "id"
                )}">${field.previousElementSibling.textContent.trim()}</a></li>`
            )
            .join("")}
        </ul>
      </div>
      `
      );

      document.querySelector(".app-status-message > ul")?.focus();
    }
  });
});
