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
const icons = document.querySelectorAll(".icons img");

icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.2)";
        icon.style.transition = "transform 0.3s ease";
    });

    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
    });
});

const emailElement = document.querySelector(".email-container .detail-box");
const mobileElement = document.querySelector(".mobile-container .detail-box");

emailElement.addEventListener("click", () => {
    navigator.clipboard.writeText(emailElement.textContent).then(() => {
        alert("Email address copied to clipboard!");
    });
});

mobileElement.addEventListener("click", () => {
    navigator.clipboard.writeText(mobileElement.textContent).then(() => {
        alert("Mobile number copied to clipboard!");
    });
});
