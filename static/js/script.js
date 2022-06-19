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

// Portfolio Item Modal

document.addEventListener("click", function (e) {
    // Show Modal in button click
    if (e.target.classList.contains("view-project-button")) {
        togglePortfolioModal();
        document.querySelector(".portfolio-modal").scrollTo(0, 0);
        populatePortfolioModal(e.target.parentElement);
    }

    // Hide Modal on offscreen click
    if (e.target.classList.contains("modal-inner")) {
        togglePortfolioModal();
    }
});

function togglePortfolioModal() {
    const portfolioModal = document.querySelector(".portfolio-modal");
    portfolioModal.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".modal-close").addEventListener("click", togglePortfolioModal);

// Hide Modal on ESC key press
document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        togglePortfolioModal();
    }
});

function populatePortfolioModal(portfolioItem) {
    const modalHeader = document.querySelector(".modal-header h3");
    const modalBody = document.querySelector(".modal-body");
    const modalImage = document.querySelector(".modal-thumbnail img");
    modalHeader.innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    modalBody.innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    modalImage.src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
}
