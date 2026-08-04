// about.js

// Display a welcome message when the page loads
window.addEventListener("load", () => {
    console.log("Welcome to our About Us page!");

    setTimeout(() => {
        alert("👋 Welcome! Thanks for visiting our About Us page.");
    }, 1000);
});

// Contact button functionality
const contactBtn = document.querySelector(".cta a");

if (contactBtn) {
    contactBtn.addEventListener("click", (event) => {
        event.preventDefault();

        alert("📧 We'd love to hear from you! Contact us at support@example.com");
    });
}