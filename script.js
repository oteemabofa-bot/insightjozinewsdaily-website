document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const forms = document.querySelectorAll(".newsletter-form, .ad-form, .live-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const inputs = form.querySelectorAll("input, textarea, select");

      if (button) {
        const originalText = button.textContent;
        button.textContent = "Submitted";
        button.disabled = true;

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          form.reset();
        }, 1800);
      }

      inputs.forEach((input) => {
        if (input.tagName !== "SELECT") {
          input.value = "";
        }
      });
    });
  });
});
