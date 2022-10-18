const stars = document.getElementById("Stars");
const moon = document.getElementById("Moon");
const mens = document.getElementById("Mens");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = `${value * 0.25}px`;
  moon.style.top = `${value * 0.5}px`;
});

const formVerificationOk = document.getElementById("form-verification-ok");
const formVerificationError = document.getElementById(
  "form-verification-error"
);
const nameInput = document.getElementById("name")
const email= document.getElementById("email")
const message= document.getElementById("message")

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.sendForm("service_tmp127n", "template_xtuqxuo", "#form").then(
    () => {
      formVerificationOk.style.display = "inherit";
      nameInput.value= ""
      email.value= ""
      message.value= ""
    },
    () => {
      formVerificationError.style.display = "inherit";
      nameInput.value= ""
      email.value= ""
      message.value= ""
    }
  );
});
