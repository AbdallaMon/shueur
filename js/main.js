document.addEventListener("DOMContentLoaded", async () => {
  // Toggle Drawer Menu
  initSliders();
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".drawer .drawer-close");

  function toggleMenu() {
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
  }

  menuIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  gsap.registerPlugin(ScrollTrigger);

  animateAboutSection();
  animateOffersSection();
  animateServiceSection();
  animateMobileAppSection();
  animateContactSection();
});
function animateAboutSection() {
  gsap.fromTo(
    ".about-section .about-title",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-section .about-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".about-image",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "cubic.in",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".about-text p",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-text p",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
}
function animateOffersSection() {
  gsap.fromTo(
    ".offers-content h2",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".offers-content h2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".offers-content h3",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".offers-content h3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".offers-content p",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".offers-content p",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".offers-content .contact-btn",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".offers-content .contact-btn",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".offers-grid .swiper-container",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3, // Add a delay between each slide animation
      scrollTrigger: {
        trigger: ".offers-grid .swiper-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
}
function animateServiceSection() {
  gsap.fromTo(
    ".service-title",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".service-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".service-subtitle",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".service-subtitle",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".service-items-grid .service-item",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".service-items-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".service-image",
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".service-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
}
function animateMobileAppSection() {
  gsap.fromTo(
    ".mobile-app-text h3",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".mobile-app-text h3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".mobile-app-text h5",
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".mobile-app-text h5",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".app-links a img",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".app-links",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".mobile-app-img img",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".mobile-app-img",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
}
function animateContactSection() {
  gsap.fromTo(
    ".contact-text h2",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-text h2",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".contact-text p",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-text p",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".contact-list li",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".contact-list",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".contact-img",
    {
      x: 50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".contact-img",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    }
  );
}

function initSliders() {
  var swiper = new Swiper(".hero-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  document
    .querySelectorAll(".scroll-imgs-container .swiper-container")
    .forEach((container) => {
      new Swiper(container, {
        direction: "vertical",
        slidesPerView: "auto", // Auto height for slides
        spaceBetween: 20,
        freeMode: true, // Allows smooth scrolling
      });
    });
}
