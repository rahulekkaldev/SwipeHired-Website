const APP_URL =
  "https://swipehired-675501162477.asia-south1.run.app";


// ==========================================
// BUTTON REDIRECTS
// ==========================================

document.querySelectorAll(".login-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = APP_URL;
  });
});


document.querySelectorAll(".signup-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = APP_URL;
  });
});


document.querySelectorAll(".candidate-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = APP_URL;
  });
});


document.querySelectorAll(".recruiter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = APP_URL;
  });
});


// ==========================================
// FAQ ACCORDION
// ==========================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const currentItem = question.parentElement;

    document.querySelectorAll(".faq-item").forEach((item) => {

      if (item !== currentItem) {
        item.classList.remove("active");
      }

    });

    currentItem.classList.toggle("active");

  });

});


// ==========================================
// MOBILE MENU
// ==========================================

const mobileButton = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileButton) {

  mobileButton.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

      navLinks.style.display = "none";

    } else {

      navLinks.style.display = "flex";

      navLinks.style.position = "absolute";
      navLinks.style.top = "76px";
      navLinks.style.left = "0";
      navLinks.style.right = "0";

      navLinks.style.flexDirection = "column";
      navLinks.style.padding = "20px";

      navLinks.style.background = "white";
      navLinks.style.borderBottom = "1px solid #e7e7eb";

      navLinks.style.margin = "0";
      navLinks.style.gap = "18px";

    }

  });

}


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 900) {
      navLinks.style.display = "none";
    }

  });

});
