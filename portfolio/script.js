/* ===========================
   Portfolio JavaScript
=========================== */

// Wait until page is loaded
window.addEventListener("load", function () {

    // Hide loader
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }

});

// ===========================
// Typing Animation
// ===========================

new Typed(".typing", {

    strings: [

        "Frontend Web Developer",
        "Oasis Infobyte Intern",
        "HTML • CSS • JavaScript",
        "Creative Learner"

    ],

    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true

});


// ===========================
// Dark / Light Mode
// ===========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


// ===========================
// Active Navigation
// ===========================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    const page = link.getAttribute("href");

    if (page === currentPage) {

        link.classList.add("active");

    }

});


// ===========================
// Scroll To Top Button
// ===========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===========================
// Simple Fade Animation
// ===========================

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hero, .intro").forEach(function (section) {

    observer.observe(section);

});
