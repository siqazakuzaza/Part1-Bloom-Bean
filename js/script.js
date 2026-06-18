// WELCOME MESSAGE
window.onload = function () {
    alert("Welcome to Bloom & Bean ☕");
};

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ORDER BUTTON
const orderBtn = document.querySelector(".btn");

if (orderBtn) {
    orderBtn.addEventListener("click", function () {
        alert("Thank you for choosing Bloom & Bean!");
    });
}

// MENU CARD HOVER EFFECT
const cards = document.querySelectorAll(".menu-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// MENU SEARCH FILTER
const searchInput = document.getElementById("searchMenu");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = this.value.toLowerCase();

        let menuCards =
            document.querySelectorAll(".menu-card");

        menuCards.forEach(card => {

            let title =
                card.querySelector("h3")
                .textContent
                .toLowerCase();

            if (title.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// CONTACT FORM VALIDATION
const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let message =
            document.getElementById("message").value.trim();

        if (name.length < 3) {
            alert("Name must be at least 3 characters.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters.");
            return;
        }

        document.getElementById("formMessage").innerHTML =
            "Message sent successfully!";

        contactForm.reset();

    });

}

// ENQUIRY FORM
const enquiryForm =
    document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let coffee =
            document.getElementById("coffeeType").value;

        let qty =
            parseInt(document.getElementById("quantity").value);

        let price = 0;

        switch (coffee) {

            case "Espresso":
                price = 35;
                break;

            case "Cappuccino":
                price = 45;
                break;

            case "Latte":
                price = 50;
                break;
        }

        let total = price * qty;

        document.getElementById("priceResult").innerHTML =
            `Estimated Cost: R${total}`;

    });

}

// FAQ ACCORDION
const accordions =
    document.querySelectorAll(".accordion");

accordions.forEach(acc => {

    acc.addEventListener("click", function () {

        this.classList.toggle("active");

        let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });

});

// GALLERY LIGHTBOX
const galleryImages =
    document.querySelectorAll(".gallery-img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        if (lightbox && lightboxImg) {

            lightbox.style.display = "block";
            lightboxImg.src = image.src;

        }

    });

});

const closeBtn =
    document.getElementById("close");

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// DARK MODE
const darkModeBtn =
    document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}

// AUTO COPYRIGHT YEAR
const footer =
    document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Bloom & Bean. All Rights Reserved.`;

}