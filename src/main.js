document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");

    // Only inject header on pages where header is empty (index.html)
    if (header && header.innerHTML.trim() === "") {
        header.innerHTML = `
            <button id="menuToggle">☰ Menu</button>

              <div class="header-center">
                   <h1>Yeshivas Toras Chaim</h1>
                    <p class="header-tagline">A place for learning and growth.</p>
                </div>

            <nav id="sideMenu">
                <a href="index.html">Home</a>
                <a href="public/aboutus.html">About Us</a>
                <a href="public/handbook.html">Handbook</a>
                <a href="public/contact.html">Contact Us</a>
                <a href="public/calendar.html">Calendar</a>
            </nav>
        `;
    }

    // Attach toggle if menu exists
    const menu = document.getElementById("sideMenu");
    const toggle = document.getElementById("menuToggle");

    if (menu && toggle) {
        toggle.addEventListener("click", () => {
            menu.style.left = menu.style.left === "0px" ? "-260px" : "0px";
        });
    }

    const bottomImage = document.getElementById("bottom-image");
    if (bottomImage) {
        const img = document.createElement("img");
        img.src = "src/images/YTCLogo.png"; // your footer image
        img.alt = "Yeshivas Toras Chaim";
        bottomImage.appendChild(img);
    }

    const middleImage = document.getElementById("middle-image");
    if (middleImage) {
        const img = document.createElement("img");
        img.src = "src/images/your-middle-image.png"; // replace later
        img.alt = "Middle Image";
        middleImage.appendChild(img);
    }

    const imageContainer = document.getElementById("image-container");
    if (imageContainer) {
        const images = [
            { src: "src/images/YTCLogo.png", alt: "5786-5787/2026-2027" }
        ];

        images.forEach(img => {
            const imageElement = document.createElement("img");
            imageElement.src = img.src;
            imageElement.alt = img.alt;
            imageContainer.appendChild(imageElement);
        });
    }
});
