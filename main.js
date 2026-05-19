"use strict";

/* =========================
   TECHPULSE MAIN JS
   Interactive UX Layer
   ========================= */

/* =========================
   DOM ELEMENTS
   ========================= */
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const backToTopBtn = document.getElementById("backToTop");
const searchBtn = document.getElementById("searchBtn");

/* =========================
   MOBILE MENU TOGGLE
   ========================= */
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // icon swap (bars <-> X)
    const icon = mobileMenuBtn.querySelector("i");

    if (icon) {
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      }
    }
  });
}

/* =========================
   BACK TO TOP BUTTON
   ========================= */
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================
   SEARCH MODAL SYSTEM
   ========================= */

/* Create Search Modal Dynamically */
const searchModal = document.createElement("div");
searchModal.id = "searchModal";
searchModal.className =
  "fixed inset-0 bg-black/70 backdrop-blur-sm hidden items-center justify-center z-[999]";

searchModal.innerHTML = `
  <div class="bg-slate-900 border border-white/10 rounded-xl p-6 w-[90%] md:w-[500px] shadow-2xl">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold text-white">Search TechPulse</h2>
      <button id="closeSearch" class="text-gray-400 hover:text-white text-xl">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <input 
      type="text" 
      placeholder="Search articles, AI, Web Dev..." 
      class="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400 text-white"
    />

    <p class="text-xs text-gray-500 mt-3">
      Tip: Try "AI", "JavaScript", "Cybersecurity"
    </p>
  </div>
`;

document.body.appendChild(searchModal);

/* Open Search */
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchModal.classList.remove("hidden");
    searchModal.classList.add("flex");
  });
}

/* Close Search */
searchModal.addEventListener("click", (e) => {
  if (e.target.id === "searchModal") {
    searchModal.classList.add("hidden");
    searchModal.classList.remove("flex");
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "closeSearch") {
    searchModal.classList.add("hidden");
    searchModal.classList.remove("flex");
  }
});

/* ESC key closes modal */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchModal.classList.add("hidden");
    searchModal.classList.remove("flex");
  }
});

/* =========================
   SMOOTH SCROLL ENHANCEMENT
   ========================= */
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

/* =========================
   CARD INTERACTION ENHANCEMENT
   ========================= */
const cards = document.querySelectorAll("article");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "rgba(34, 211, 238, 0.4)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "rgba(255, 255, 255, 0.1)";
  });
});

/* =========================
   PERFORMANCE READY LOG
   ========================= */
console.log("%cTechPulse Loaded Successfully 🚀", "color:#22d3ee;font-size:14px;font-weight:bold;");
