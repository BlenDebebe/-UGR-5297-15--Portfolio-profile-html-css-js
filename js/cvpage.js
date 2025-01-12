document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav li a");
    const currentPage = window.location.pathname.split("/").pop();

    navItems.forEach((item) => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
});

const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    section.addEventListener("click", () => {
        alert(`You clicked on the ${section.className.replace("-", " ")} section!`);
    });
});
