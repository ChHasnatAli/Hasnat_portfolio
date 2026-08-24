import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

const initProjectFilters = () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) =>
        btn.classList.toggle("active", btn === button)
      );

      projectCards.forEach((card) => {
        const categories = card.dataset.category || "";
        const matches =
          selectedFilter === "all" || categories.includes(selectedFilter);
        card.style.display = matches ? "grid" : "none";
      });
    });
  });
};

const initMobileMenu = () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const initContactForm = () => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const fields = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    fields.forEach((field) => {
      const isEmpty = !field.value.trim();
      field.classList.toggle("invalid", isEmpty);
      if (isEmpty) isValid = false;
    });

    if (!isValid) {
      status.textContent =
        "Please complete all fields before sending your message.";
      status.className = "form-status error";
      return;
    }

    const message = [
      `Name: ${form.elements.name.value.trim()}`,
      `Email: ${form.elements.email.value.trim()}`,
      `Subject: ${form.elements.subject.value.trim()}`,
      `Message: ${form.elements.message.value.trim()}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/923168056420?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    form.reset();
    status.textContent = "Opening WhatsApp with your message.";
    status.className = "form-status success";
  });
};

const initActiveNav = () => {
  const links = document.querySelectorAll('.nav-menu a[href^="#"]');
  const sections = [...document.querySelectorAll("main section[id]")];

  const setActiveLink = () => {
    const scrollY = window.scrollY + 120;
    let activeId = "#home";

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        activeId = `#${section.id}`;
      }
    });

    links.forEach((link) => {
      const isActive = link.getAttribute("href") === activeId;
      link.classList.toggle("active", isActive);
    });
  };

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
};

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initProjectFilters();
initMobileMenu();
initContactForm();
initActiveNav();
