// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

let words = [
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

/* ===== HAMBURGER MENU ===== */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar nav");

    if (!button || !menu) return;

    button.onclick = function () {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            button.innerHTML = "×";
            button.setAttribute("aria-expanded", "true");
        } else {
            button.innerHTML = "☰";
            button.setAttribute("aria-expanded", "false");
        }
    };

    menu.querySelectorAll("a").forEach(function (link) {
        link.onclick = function () {
            menu.classList.remove("active");
            button.innerHTML = "☰";
            button.setAttribute("aria-expanded", "false");
        };
    });
});

/* ===== FULL LANGUAGE SWITCHER ===== */

const portfolioLanguages = {
    id: {
        navHome: "Beranda",
        navAbout: "Tentang Saya",
        navSkills: "Kemampuan",
        navExperience: "Pengalaman",
        navEducation: "Pendidikan",
        navProjects: "Proyek",
        navContact: "Kontak",

        heroLabel: "SELAMAT DATANG DI PORTFOLIO SAYA",
        heroDescription: "Saya adalah pribadi yang disiplin, mudah beradaptasi, bertanggung jawab, dan memiliki kemauan untuk terus belajar serta berkembang di lingkungan kerja.",
        heroContact: "Hubungi Saya",
        heroDownload: "Download CV",

        aboutLabel: "TENTANG SAYA",
        aboutTitle: "Tentang Saya",
        about1: "Saya merupakan lulusan SMK Negeri 4 Garut jurusan Agribisnis Ternak Unggas. Saya memiliki pengalaman kerja di bidang produksi dan dapur, sehingga terbiasa bekerja dengan target, mengikuti prosedur kerja, menjaga kualitas, serta bekerja secara disiplin.",
        about2: "Saya memiliki kemampuan beradaptasi dengan lingkungan baru, mampu bekerja secara individu maupun bersama tim, dan memiliki keinginan untuk mempelajari hal-hal baru.",

        skillsLabel: "KEMAMPUAN SAYA",
        skillsTitle: "Kemampuan",
        skill: ["Disiplin", "Kerja Tim", "Adaptasi", "Manajemen Stok", "Produksi", "Operasional Dapur"],

        experienceLabel: "PERJALANAN SAYA",
        experienceTitle: "Pengalaman Kerja",
        expDuration: ["9 Bulan", "6 Bulan"],
        expRole: ["Operator Produksi", "Staf Dapur"],
        expText: [
            "Berpengalaman dalam menjalankan proses produksi, mengikuti prosedur kerja, menjaga kualitas hasil produksi, serta bekerja dengan memperhatikan ketelitian, keselamatan, dan target kerja.",
            "Bertanggung jawab dalam persiapan bahan, pengolahan makanan sesuai SOP, menjaga kebersihan area dapur, melakukan pengecekan stok (SO), serta membantu pengelolaan persediaan bahan."
        ],

        educationLabel: "PENDIDIKAN",
        educationTitle: "Pendidikan",
        educationMajor: "Agribisnis Ternak Unggas",

        projectsLabel: "PORTFOLIO",
        projectTech: "HTML • CSS • JavaScript",
        email: "Surel",
        projectsTitle: "Proyek",
        projectType: "PROYEK PRIBADI",
        projectTitle: "Website Portfolio Pribadi",
        projectLink: "Lihat Project ↗",
        projectGithub: "GitHub ↗",
        projectText: "Website portfolio pribadi yang dibuat untuk memperkenalkan pengalaman, kemampuan, pendidikan, dan informasi kontak secara profesional.",

        contactLabel: "HUBUNGI SAYA",
        contactTitle: "Hubungi Saya",
        contactText: "Jika Anda ingin menghubungi saya mengenai peluang kerja atau informasi lainnya, silakan menghubungi melalui kontak berikut.",
        locationLabel: "Lokasi",
        footer: "Semua Hak Dilindungi.",

        typing: [
            "Siap Berkembang di Dunia Kerja",
            "Disiplin dan Bertanggung Jawab",
            "Mudah Beradaptasi",
            "Siap Belajar Hal Baru"
        ]
    },

    en: {
        navHome: "Home",
        navAbout: "About Me",
        navSkills: "Skills",
        navExperience: "Experience",
        navEducation: "Education",
        navProjects: "Projects",
        navContact: "Contact",

        heroLabel: "WELCOME TO MY PORTFOLIO",
        heroDescription: "I am a disciplined, adaptable, and responsible person with a strong willingness to keep learning, growing, and contributing in a professional work environment.",
        heroContact: "Contact Me",
        heroDownload: "Download CV",

        aboutLabel: "ABOUT ME",
        aboutTitle: "About Me",
        about1: "I am a graduate of SMK Negeri 4 Garut, majoring in Poultry Agribusiness. I have work experience in production and kitchen operations, making me familiar with working toward targets, following procedures, maintaining quality, and working with discipline.",
        about2: "I am able to adapt to new environments, work independently or as part of a team, and have a strong willingness to learn new things.",

        skillsLabel: "MY SKILLS",
        skillsTitle: "Skills",
        skill: ["Discipline", "Teamwork", "Adaptability", "Stock Management", "Production", "Kitchen Operations"],

        experienceLabel: "MY JOURNEY",
        experienceTitle: "Work Experience",
        expDuration: ["9 Months", "6 Months"],
        expRole: ["Production Operator", "Kitchen Staff"],
        expText: [
            "Experienced in handling production processes, following work procedures, maintaining production quality, and working with attention to accuracy, safety, and targets.",
            "Responsible for ingredient preparation, food preparation according to SOPs, maintaining kitchen cleanliness, conducting stock opname, and assisting with inventory management."
        ],

        educationLabel: "EDUCATION",
        educationTitle: "Education",
        educationMajor: "Poultry Agribusiness",

        projectsLabel: "PORTFOLIO",
        projectTech: "HTML • CSS • JavaScript",
        email: "Email",
        projectsTitle: "Projects",
        projectType: "PERSONAL PROJECT",
        projectTitle: "Personal Portfolio Website",
        projectLink: "View Project ↗",
        projectGithub: "GitHub ↗",
        projectText: "A personal portfolio website created to professionally showcase my experience, skills, education, and contact information.",

        contactLabel: "GET IN TOUCH",
        contactTitle: "Contact Me",
        contactText: "If you would like to contact me regarding job opportunities or other information, please reach me through the following contact details.",
        locationLabel: "Location",
        footer: "All Rights Reserved.",

        typing: [
            "Ready to Grow Professionally",
            "Disciplined and Responsible",
            "Highly Adaptable",
            "Ready to Learn New Things"
        ]
    }
};


function applyStaticPortfolioLanguage(t) {
    const set = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    set("nav-home", t.navHome);

    set("about-label", t.aboutLabel);
    set("skills-label", t.skillsLabel);
    set("experience-label", t.experienceLabel);
    set("education-label", t.educationLabel);
    set("projects-label", t.projectsLabel);
    set("contact-label", t.contactLabel);

    set("skills-title", t.skillsTitle);
    set("projects-title", t.projectsTitle);

    set("skill-1", t.skill[0]);
    set("skill-2", t.skill[1]);
    set("skill-3", t.skill[2]);
    set("skill-4", t.skill[3]);
    set("skill-5", t.skill[4]);
    set("skill-6", t.skill[5]);

    set("exp-role-1", t.expRole[0]);
    set("exp-role-2", t.expRole[1]);

    set("education-major", t.educationMajor);

    set("project-type", t.projectType);
    set("project-title", t.projectTitle);
    set("project-description", t.projectText);
    set("project-tech", t.projectTech);
    set("project-link", t.projectLink);
    set("project-github", t.projectGithub);

    set("email-label", t.email);
    set("whatsapp-label", "WhatsApp");
}

function applyPortfolioLanguage(lang) {

    const t = portfolioLanguages[lang];
    if (!t) return;

    applyStaticPortfolioLanguage(t);

    const set = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    };

    set("#nav-about", t.navAbout);
    set("#nav-skills", t.navSkills);
    set("#nav-experience", t.navExperience);
    set("#nav-education", t.navEducation);
    set("#nav-projects", t.navProjects);
    set("#nav-contact", t.navContact);

    set("#hero-label", t.heroLabel);
    set("#hero-description", t.heroDescription);
    set("#hero-contact", t.heroContact);
    set("#hero-download", t.heroDownload);

    set("#about .section-heading p", t.aboutLabel);
    set("#about .section-heading h2", t.aboutTitle);

    const about = document.querySelectorAll("#about .about-content p");
    if (about[0]) about[0].textContent = t.about1;
    if (about[1]) about[1].textContent = t.about2;

    set("#skills .section-heading p", t.skillsLabel);
    set("#skills .section-heading h2", t.skillsTitle);

    document.querySelectorAll("#skills .skill-card h3").forEach((el, i) => {
        if (t.skill[i]) el.textContent = t.skill[i];
    });

    set("#experience .section-heading p", t.experienceLabel);
    set("#experience .section-heading h2", t.experienceTitle);

    document.querySelectorAll(".experience-card").forEach((card, i) => {
        const duration = card.querySelector(".experience-duration");
        const role = card.querySelector("h4");
        const text = card.querySelector("p");

        if (duration) duration.textContent = t.expDuration[i];
        if (role) role.textContent = t.expRole[i];
        if (text) text.textContent = t.expText[i];
    });

    set("#education .section-heading p", t.educationLabel);
    set("#education .section-heading h2", t.educationTitle);
    set("#education .education-card p", t.educationMajor);

    set("#projects .section-heading p", t.projectsLabel);
    set("#projects .section-heading h2", t.projectsTitle);
    set(".project-content > span", t.projectType);
    set(".project-content h3", t.projectTitle);
    set(".project-content p", t.projectText);

    set("#contact .section-heading p", t.contactLabel);
    set("#contact .section-heading h2", t.contactTitle);
    set("#contact .contact-card > p", t.contactText);

    const locationLabel = document.getElementById("contact-location-label");
    if (locationLabel) {
        locationLabel.textContent = t.locationLabel;
    }

    const footer = document.querySelector("footer p");
    if (footer) {
        footer.textContent = `© ${new Date().getFullYear()} Miftah Nursyaban. ${t.footer}`;
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("portfolio-language", lang);
    words = t.typing;
    wordIndex = 0;
    charIndex = 0;
    deleting = false;

    document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    const languageButtons = document.querySelectorAll(".lang-btn");

    languageButtons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            applyPortfolioLanguage(this.dataset.lang);
        });
    });

    applyPortfolioLanguage(
        localStorage.getItem("portfolio-language") || "id"
    );
});


/* ===== NAVBAR SCROLL EFFECT ===== */
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const updateNavbar = () => {
        navbar.classList.toggle("navbar-scrolled", window.scrollY > 30);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
});

/* ===== DARK / LIGHT MODE ===== */
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (!themeToggle || !themeIcon) return;

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.textContent = "🌙";
    }

    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");

        themeIcon.textContent = isLight ? "🌙" : "☀️";
        localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    });
});

/* ===== SKILL EXPAND CLICK ===== */
document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-expandable");

    skillCards.forEach((card) => {
        const trigger = card.querySelector(".skill-trigger");

        if (!trigger) return;

        trigger.addEventListener("click", () => {
            const isActive = card.classList.contains("active");

            skillCards.forEach((item) => {
                item.classList.remove("active");
                const btn = item.querySelector(".skill-trigger");
                if (btn) btn.setAttribute("aria-expanded", "false");
            });

            if (!isActive) {
                card.classList.add("active");
                trigger.setAttribute("aria-expanded", "true");
            }
        });
    });
});


/* ===== ACTIVE NAVBAR ON SCROLL ===== */

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar nav a");

    const sections = Array.from(navLinks)
        .map(link => {
            const id = link.getAttribute("href");
            return id && id.startsWith("#")
                ? document.querySelector(id)
                : null;
        })
        .filter(Boolean);

    if (!navLinks.length || !sections.length) return;

    const updateActiveNav = () => {
        const scrollPosition = window.scrollY + 140;

        let currentSection = sections[0];

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }
        });

        navLinks.forEach(link => {
            const target = link.getAttribute("href");
            link.classList.toggle(
                "active",
                target === `#${currentSection.id}`
            );
        });
    };

    window.addEventListener("scroll", updateActiveNav, {
        passive: true
    });

    updateActiveNav();
});

