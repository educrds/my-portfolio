const stars = document.getElementById("bg-stars");
const moon = document.getElementById("bg-moon");
const mens = document.getElementById("bg-mens");
const formVerification = document.getElementById("form-verification");
const formContact = document.getElementById("contact-form");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = `${value * 0.25}px`;
  moon.style.top = `${value * 0.5}px`;
});

formContact.addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.sendForm("service_tmp127n", "template_xtuqxuo", "#contact-form").then(
    () => {
      formVerification.classList.add("ok");
      formVerification.style.display = "inherit";
      formContact.reset();
    },
    () => {
      formVerification.classList.add("error");
      formVerification.style.display = "inherit";
      formContact.reset();
    }
  );
});
