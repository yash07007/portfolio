// About Tabs

const aboutSection = document.querySelector(".about-section");
const tabButtons = document.querySelector(".about-tabs");
tabButtons.addEventListener("click", function (e) {
    const tabButton = e.target;
    if (tabButton.classList.contains("tab-item") && !tabButton.classList.contains("active")) {
        tabButtons.querySelector(".active").classList.remove("active");
        tabButton.classList.add("active");
        const targetTab = tabButton.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(targetTab).classList.add("active");
    }
});
