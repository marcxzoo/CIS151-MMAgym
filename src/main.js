import '/styles/modern-reset.css'
import '/styles/style.css'
import '/styles/components/header.css'
import '/styles/components/hero.css'
// import '/styles/components/minified/heroMinify.css'
import '/styles/components/story.css'
import '/styles/components/testimonials.css'
// import '/styles/components/minified/testimonyMinify.css'
import '/styles/components/programsSection.css'
// import '/styles/components/minified/programSectionMinify.css'
import '/styles/components/banner.css'
import '/styles/components/benefitsSection.css'
// import '/styles/components/minified/benefitMinify.css'
import '/styles/components/footer.css'
import '/styles/components/classPage.css'
import '/styles/components/booking.css'
import '/styles/components/calendar.css'
import '/styles/components/about.css'
import '/styles/components/merch.css'
import '/styles/components/membership.css'
import '/styles/utils.css'

const hamburger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");      // animate bars
  mobileMenu.classList.toggle("active");     // slide menu in/out
});

document.querySelectorAll(".navLink").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  })
);
