// Header content
document.getElementById("header").innerHTML = `
    <h1>Yeshivas Toras Chaim</h1>
    <p>A place for learning and growth.
    </p>
    <a href="aboutus.html">About Us</a> |
    <a href="calendar.html">Calendar</a> |
    <a href="handbook.html">Handbook</a> |
    <a href="contact.html">Contact Us</a>
`;

// Welcome message
document.getElementById("welcome").textContent = "Yeshivas Toras Chaim";

// Images
const images = [
    { src: "images/YTCLogo.png", alt: "5786-5787/2026-2027"}
];

//const imageContainer = document.getElementById("image-container");

// images.forEach(img => {
//     const imageElement = document.createElement("img");
//     imageElement.src = img.src;
//     imageElement.alt = img.alt;
//     imageContainer.appendChild(imageElement);
// });

