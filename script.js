const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


document.querySelectorAll(".navbar nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");
        menuBtn.textContent = "☰";

    });

});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


document.getElementById("year").textContent =
    new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});