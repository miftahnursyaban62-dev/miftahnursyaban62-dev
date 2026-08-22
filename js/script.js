// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Siap Berkembang di Dunia Kerja",
    "Disiplin dan Bertanggung Jawab",
    "Mudah Beradaptasi",
    "Siap Belajar Hal Baru"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 80);
}

if (typingText) {
    typeEffect();
}


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.textContent =
        `© ${year} Miftah Nursyaban. All Rights Reserved.`;
}
/* =========================
   PREMIUM SCROLL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    '.section-heading, .skill-card, .experience-card, .education-card, .project-card, .contact-card'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});
