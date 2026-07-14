// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // Gentle reveal-on-scroll for cells (respects reduced motion via CSS)
  const cells = document.querySelectorAll(".cell, .project, .cert-card");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cells.forEach((c) => {
      c.classList.add("reveal");
      io.observe(c);
    });
  }

  // Contact form: no backend, so just confirm intent to the user
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
      const body = encodeURIComponent(form.querySelector("#message").value);
      window.location.href = `mailto:harikrishnasanna@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
