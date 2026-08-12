// SwipeHired application URL
const APP_URL =
  "https://swipehired-675501162477.asia-south1.run.app";


// ========================================
// LOGIN / SIGNUP REDIRECT
// ========================================

document.querySelectorAll("[data-auth]").forEach((button) => {

  button.addEventListener("click", () => {

    // Both login and signup currently redirect
    // to the SwipeHired application.

    window.location.href = APP_URL;

  });

});


// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");


if (mobileMenuBtn && mobileMenu) {

  mobileMenuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

  });


  // Close mobile menu after clicking a link

  mobileMenu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");

    });

  });

}


// ========================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ========================================

document.addEventListener("click", (event) => {

  if (!mobileMenu || !mobileMenuBtn) {
    return;
  }

  const clickedInsideMenu =
    mobileMenu.contains(event.target);

  const clickedButton =
    mobileMenuBtn.contains(event.target);

  if (!clickedInsideMenu && !clickedButton) {

    mobileMenu.classList.remove("active");

  }

});


// ========================================
// SIMPLE SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
  ".problem-card, .step, .recommendation, .feature, .candidate-row"
);


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.1
    }
  );


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);

});


// ========================================
// CURRENT YEAR
// ========================================

const yearElement =
  document.querySelector(".footer-bottom span");

if (yearElement) {

  yearElement.textContent =
    `© ${new Date().getFullYear()} SwipeHired. All rights reserved.`;

}
