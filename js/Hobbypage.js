document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".navbar li a");
    const currentPage = window.location.pathname.split("/").pop();

    navItems.forEach((item) => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
});
const images = document.querySelectorAll(".small-image img, .large-image img");

images.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

const video = document.querySelector(".video-section video");

video.addEventListener("click", () => {
    if (video.autoplay) {
        video.autoplay = false;
        video.pause();
        alert("Video autoplay is now off.");
    } else {
        video.autoplay = true;
        video.play();
        alert("Video autoplay is now on.");
    }
});
