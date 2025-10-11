// Mendaftarkan plugin ScrollTrigger dengan GSAP
gsap.registerPlugin(ScrollTrigger);

// --- ANIMASI HERO SECTION (Saat Halaman Dimuat) ---
// Animasi ini berjalan sekali saat halaman pertama kali dibuka
gsap.from(".text-intro", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out", delay: 0.5 });
gsap.from(".title", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out", delay: 0.7 });
gsap.from(".text-header", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out", delay: 0.9 });
gsap.from(".buttons-container", { opacity: 0, y: -30, duration: 0.8, ease: "power2.out", delay: 1.1 });
// gsap.from(".center-image", { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out", delay: 1.3 });
gsap.from(".worked img", { opacity: 0, y: 30, duration: 0.6, stagger: 0.1, delay: 1.5 });


// --- ANIMASI SAAT SCROLL ---
// Fungsi ini akan membuat animasi untuk elemen yang muncul saat di-scroll

// Animasi untuk Section "Services"
gsap.from(".services-section .section-title", {
    scrollTrigger: ".services-section",
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
});
gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%", // Mulai animasi saat 80% bagian atas grid terlihat
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2 // Memberi jeda antar animasi kartu
});

// Animasi untuk Section "About Me"
gsap.from(".about-image-content", {
    scrollTrigger: ".about-me-section",
    opacity: 0,
    x: -100, // Muncul dari kiri
    duration: 1,
    ease: "power3.out"
});
gsap.from(".about-text-content", {
    scrollTrigger: ".about-me-section",
    opacity: 0,
    x: 100, // Muncul dari kanan
    duration: 1,
    ease: "power3.out"
});

// Animasi untuk Section "Recent Project"
gsap.from(".card-section-utama h1", {
    scrollTrigger: ".card-section-utama",
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
});
gsap.from(".card-link", {
    scrollTrigger: {
        trigger: ".card-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.1
});

// Animasi untuk CTA Section
gsap.from(".cta-section", {
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out"
});

// Animasi untuk Footer
gsap.from(".footer-column", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2
});