/* =====================================================
   ES MURAMA SCHOOL WEBSITE
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");
const progress = document.getElementById("loading-progress");
const number = document.getElementById("loading-number");

function finishLoader() {
    if (!loader) return;

    if (progress) progress.style.width = "100%";
    if (number) number.textContent = "100%";

    loader.classList.add("loaded");
    document.body.classList.add("website-loaded");

    // Remove it from the layout after the fade-out finishes.
    window.setTimeout(() => {
        loader.style.display = "none";
    }, 800);
}

if (loader) {
    let loading = 0;
    const duration = 1400;
    const start = performance.now();

    function animateLoader(now) {
        const elapsed = now - start;
        loading = Math.min(100, Math.round((elapsed / duration) * 100));

        if (progress) progress.style.width = loading + "%";
        if (number) number.textContent = loading + "%";

        if (loading < 100) {
            window.requestAnimationFrame(animateLoader);
        } else {
            finishLoader();
        }
    }

    window.requestAnimationFrame(animateLoader);

    // Safety fallback: never leave the loader stuck.
    window.setTimeout(finishLoader, 3500);
}

/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navbar nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("mobile-open");

        menuButton.classList.toggle(
            "menu-active",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

}


/* =====================================================
   NAVIGATION LINKS
===================================================== */

const navLinks =
    document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const href = this.getAttribute("href");

        /* Close mobile menu */

        if (navigation) {
            navigation.classList.remove("mobile-open");
        }

        if (menuButton) {
            menuButton.classList.remove("menu-active");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        /* Only smooth-scroll internal links */

        if (
            href &&
            href.startsWith("#") &&
            href.length > 1
        ) {

            const target =
                document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(".simple-section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "section-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    sections.forEach(section => {

        section.classList.add(
            "section-hidden"
        );

        observer.observe(section);

    });

} else {

    sections.forEach(section => {

        section.classList.add(
            "section-visible"
        );

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const pageSections =
    document.querySelectorAll(
        "#home, #about, #academics, #admissions, #gallery, #contact"
    );

if (
    "IntersectionObserver" in window &&
    pageSections.length
) {

    const sectionObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        const linkTarget =
                            link.getAttribute("href");

                        if (
                            linkTarget ===
                            "#" + currentId
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },

            {
                threshold: 0.45
            }

        );

    pageSections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* =====================================================
   ANIMATED COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

if (
    counters.length &&
    "IntersectionObserver" in window
) {

    const counterObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const counter =
                        entry.target;

                    const target = Math.max(
                        0,
                        Number(
                            counter.getAttribute(
                                "data-target"
                            )
                        ) || 0
                    );

                    let current = 0;

                    const duration = 1500;
                    const startTime =
                        performance.now();

                    function updateCounter(
                        currentTime
                    ) {

                        const elapsed =
                            currentTime -
                            startTime;

                        const progress =
                            Math.min(
                                elapsed / duration,
                                1
                            );

                        /* Smooth easing */

                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );

                        current = Math.floor(
                            eased * target
                        );

                        counter.textContent =
                            current;

                        if (progress < 1) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target;

                        }

                    }

                    requestAnimationFrame(
                        updateCounter
                    );

                    counterObserver.unobserve(
                        counter
                    );

                });

            },

            {
                threshold: 0.7
            }

        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

} else {

    /* Fallback */

    counters.forEach(counter => {

        counter.textContent =
            counter.getAttribute(
                "data-target"
            ) || "0";

    });

}


/* =====================================================
   GALLERY LIGHTBOX
===================================================== */

const galleryItems =
    document.querySelectorAll(".gallery-item");

if (galleryItems.length) {

    /* Create lightbox */

    const lightbox =
        document.createElement("div");

    lightbox.className =
        "gallery-lightbox";

    lightbox.innerHTML = `
        <button
            class="lightbox-close"
            aria-label="Close image"
            type="button"
        >
            &times;
        </button>

        <img
            class="lightbox-image"
            src=""
            alt=""
        >
    `;

    document.body.appendChild(lightbox);

    const lightboxImage =
        lightbox.querySelector(
            ".lightbox-image"
        );

    const closeButton =
        lightbox.querySelector(
            ".lightbox-close"
        );


    /* Open image */

    galleryItems.forEach(item => {

        const image =
            item.querySelector("img");

        if (!image) return;

        item.setAttribute(
            "tabindex",
            "0"
        );

        item.addEventListener(
            "click",
            () => {

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt ||
                    "School gallery image";

                lightbox.classList.add(
                    "lightbox-visible"
                );

                document.body.classList.add(
                    "lightbox-open"
                );

            }
        );

        /* Keyboard accessibility */

        item.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    item.click();

                }

            }
        );

    });


    /* Close button */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    /* Click outside image */

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* Escape key */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains(
                    "lightbox-visible"
                )
            ) {

                closeLightbox();

            }

        }
    );


    function closeLightbox() {

        lightbox.classList.remove(
            "lightbox-visible"
        );

        document.body.classList.remove(
            "lightbox-open"
        );

    }

}


/* =====================================================
   SCROLL TO TOP BUTTON
===================================================== */

const scrollTopButton =
    document.getElementById("scrollTopBtn");

if (scrollTopButton) {

    function updateScrollButton() {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add(
                "show"
            );

        } else {

            scrollTopButton.classList.remove(
                "show"
            );

        }

    }

    window.addEventListener(
        "scroll",
        updateScrollButton,
        { passive: true }
    );

    updateScrollButton();


    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message has been received.";

                formMessage.classList.add(
                    "form-success"
                );

            }

            contactForm.reset();

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            !navigation ||
            !menuButton
        ) {
            return;
        }

        const clickedInsideMenu =
            navigation.contains(
                event.target
            );

        const clickedButton =
            menuButton.contains(
                event.target
            );

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navigation.classList.contains(
                "mobile-open"
            )
        ) {

            navigation.classList.remove(
                "mobile-open"
            );

            menuButton.classList.remove(
                "menu-active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =====================================================
   PREVENT BODY SCROLL WHILE LIGHTBOX IS OPEN
===================================================== */

const bodyObserver =
    new MutationObserver(() => {

        if (
            document.body.classList.contains(
                "lightbox-open"
            )
        ) {

            document.body.style.overflow =
                "hidden";

        } else {

            document.body.style.overflow =
                "";

        }

    });

bodyObserver.observe(
    document.body,
    {
        attributes: true,
        attributeFilter: ["class"]
    }
);


/* =====================================================
   PAGE READY
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-ready"
        );

    }
);

/* =====================================================
   STAFF SLIDESHOW + FILTERS
===================================================== */
(() => {
    const slides = Array.from(document.querySelectorAll('.staff-slide'));
    const dots = Array.from(document.querySelectorAll('.staff-slider-dots button'));
    const prev = document.querySelector('.staff-slider-control.prev');
    const next = document.querySelector('.staff-slider-control.next');
    const tabs = Array.from(document.querySelectorAll('.staff-tab'));
    const cards = Array.from(document.querySelectorAll('.staff-card'));

    if (!slides.length) return;

    let current = 0;
    let timer = null;
    let paused = false;

    function showSlide(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }

    function startAutoplay() {
        window.clearInterval(timer);
        timer = window.setInterval(() => {
            if (!paused && !document.hidden) showSlide(current + 1);
        }, 5000);
    }

    prev?.addEventListener('click', () => { showSlide(current - 1); startAutoplay(); });
    next?.addEventListener('click', () => { showSlide(current + 1); startAutoplay(); });
    dots.forEach(dot => dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.slide || 0));
        startAutoplay();
    }));

    const slider = document.querySelector('.staff-slider');
    slider?.addEventListener('mouseenter', () => paused = true);
    slider?.addEventListener('mouseleave', () => paused = false);
    slider?.addEventListener('focusin', () => paused = true);
    slider?.addEventListener('focusout', () => paused = false);

    // Pause while the tab is hidden to avoid wasting timers.
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) startAutoplay();
    });

    showSlide(0);
    startAutoplay();

    function filterStaff(category) {
        cards.forEach(card => {
            const visible = card.dataset.staffCategory === category;
            card.classList.toggle('is-hidden', !visible);
        });
        tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.staffFilter === category));
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => filterStaff(tab.dataset.staffFilter));
    });

    filterStaff('administration');
})();
