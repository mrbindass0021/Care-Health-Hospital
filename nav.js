```javascript
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
```
```javascript
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

function performSearch() {
    const query = searchInput.value.trim();

    if (query !== "") {
        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(query),
            "_blank"
        );
    }
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});
```
