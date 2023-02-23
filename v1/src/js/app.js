const stars = document.getElementById('bg-stars');
const moon = document.getElementById('bg-moon');
const mens = document.getElementById('bg-mens');
const formVerification = document.getElementById('form-verification');
const formContact = document.getElementById('contact-form');

window.addEventListener('scroll', parallax);
formContact.addEventListener('submit', handleContact);

function parallax() {
  const value = window.scrollY;
  stars.style.left = `${value * 0.15}px`;
  moon.style.top = `${value * 0.55}px`;
}

// Scroll Animation 
ScrollReveal().reveal('.project-squares',{ interval: 350 });
ScrollReveal().reveal('.timeline-entry',{ interval: 350 });
ScrollReveal().reveal('.sobre-mim-row',{ interval: 350 });
ScrollReveal().reveal('.contact-form',{ distance: '70px' });

function handleContact(e) {
  e.preventDefault();
  
  const emailJs = emailjs.sendForm(
    'service_tmp127n',
    'template_xtuqxuo',
    '#contact-form'
  );
  emailJs.then(
    // Fullfilld
    () => formMessage('ok'),
    // Rejected
    () => formMessage('error')
  );
}

const formMessage = (status) => {
  formVerification.classList.add(status);
  formVerification.style.display = 'inherit';
  formContact.reset();
};
