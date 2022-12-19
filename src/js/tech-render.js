import data from '../../assets/data/tech.js';

const square = document.getElementById('tech-list');

const convertJSONtoHTML = data.map(({ name, progress, icon }) => {
  return `
    <div class="col squares tech-squares">
     <img src="${icon}" alt="logo ${name}" />
     <p>${name}</p>
     <div class="progress">
        <div
        class="progress-bar progress-bar-striped" role="progressbar" style="width: ${progress}%" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100"
        ></div>
     </div>
    </div>`;
});

square.innerHTML = convertJSONtoHTML.join('');

ScrollReveal().reveal('.tech-squares',{ interval: 400 });
