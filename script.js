document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  const form = document.querySelector(".newsletter-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const input = form.querySelector("input");

      if (!input || !button) return;

      const value = input.value.trim();
      if (!value) {
        input.focus();
        return;
      }

      button.textContent = "Subscribed";
      button.disabled = true;
      input.value = "";
      input.placeholder = "You’re on the list";
    });
  }
});
