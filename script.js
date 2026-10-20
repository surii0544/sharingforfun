
//https://www.pinterest.com/sharinforfun/
const PINTEREST_PROFILE_URL = "https://www.pinterest.com/sharingforfun/";

const pinterestLink = document.getElementById("pinterestLink");

if (pinterestLink) {
    pinterestLink.href = PINTEREST_PROFILE_URL;
    pinterestLink.target = "_blank";
    pinterestLink.rel = "noopener noreferrer";
}
pinterestLink.href = PINTEREST_PROFILE_URL;

const searchInput = document.getElementById("searchInput");
const cards = Array.from(document.querySelectorAll(".artwork-card"));
const filterButtons = Array.from(document.querySelectorAll(".filter"));
const noResults = document.getElementById("noResults");
let activeCategory = "all";

function updateGallery() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category;
    const title = card.dataset.title.toLowerCase();
    const matchesCategory = activeCategory === "all" || category === activeCategory;
    const matchesSearch = title.includes(query) || card.textContent.toLowerCase().includes(query);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visibleCount += 1;
  });

  noResults.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateGallery();
  });
});

searchInput.addEventListener("input", updateGallery);

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});
https://www.pinterest.com/
