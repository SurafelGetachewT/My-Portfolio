const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.menu-bar').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach((element) => element.addEventListener('click', closeMobileMenu));

const projectDetail = [{
  title: 'Tonic',
  exprience: ['CANOPY', 'Back End Dev', '2015'],
  desription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'css', 'javascript'],
  popupTech: ['github', 'Ruby', 'Bootstrap'],
  image: './images/desktop/portfolio1.svg',
  imageMobile: './images/snapshoot_portfolio.png',
  imageMobilePopup: './images/snapshoot_portfolio.png',
  imagePopup: './images/desktop/portfolio1.svg',
  seeLive: 'https://surafelgetachewt.github.io/surafel-portifolio.github.io/',
  seeSource: 'https://github.com/SurafelGetachewT/My-Portfolio',
},
{
  title: 'Multi-Post Stories',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['github', 'Ruby', 'Bootstrap'],
  image: './images/desktop/portfolio2.svg',
  imageMobile: './images/snapshoot2.png',
  imageMobilePopup: './images/snapshoot2.png',
  imagePopup: './images/desktop/portfolio2.svg',
  seeLive: 'https://surafelgetachewt.github.io/surafel-portifolio.github.io/',
  seeSource: 'https://github.com/SurafelGetachewT/My-Portfolio',
},
{
  title: 'Facebook 360',
  exprience: ['FACEBOOK', 'Back End Dev', '2015'],
  desription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['github', 'Ruby', 'Bootstrap'],
  image: './images/desktop/portfolio3.svg',
  imageMobile: './images/snapshoot3.png',
  imageMobilePopup: './images/snapshoot3.png',
  imagePopup: './images/desktop/portfolio3.svg',
  seeLive: 'https://surafelgetachewt.github.io/surafel-portifolio.github.io/',
  seeSource: 'https://github.com/SurafelGetachewT/My-Portfolio',
},
{
  title: 'Uber Navigation',
  exprience: ['UBER', 'Lead Developer', '2018'],
  desription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea.',
  technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  popupTech: ['github', 'Ruby', 'Bootstrap'],
  image: './images/desktop/portfolio4.svg',
  imageMobile: './images/snapshoot4.png',
  imageMobilePopup: './images/snapshoot4.png',
  imagePopup: './images/desktop/portfolio4.svg',
  seeLive: 'https://surafelgetachewt.github.io/surafel-portifolio.github.io/',
  seeSource: 'https://github.com/SurafelGetachewT/My-Portfolio',
},
];

const popupModal = document.querySelector('#portfolioPopup');

for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="tag1"><a class="tag-text" href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a class="role-text" href="#">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="./images/Counter.png" alt="dot"></a></li>';
  }
  document.querySelector('#portfolio').innerHTML += `<section class="works" id="portfolio">
  <div class="card">
      <div>
          <img src="${projectDetail[i].imageMobile}" alt="Snapshoot of portfolio">
      </div>
          <div class="left-item">
                    <div class="primary-text">
                        <h2 class="project-title">${projectDetail[i].title}</h2>
                        <div class="frame2">
                            <div class="client">
                                <div class="roles" >
                                    <p class="role-text">${experienceList}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="secondary-text">${projectDetail[i].desription}</p>
                    </div>
                    <div>
                        <ul class="tags">
                            <li>
                                <p class="tag-text">${tech}</p>
                            </li>
                        </ul>
                    </div> 
                    <div class="action">
                        <button data-index = "${i}" class="first_button">See Project</button>
                      </div>      
              </div>       
      </div>
  </div>
</section>`;
}

for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="tag1"><a class="tag-text" href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="box canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a class="role-text" href="#">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="./images/Counter.png" alt="dot"></a></li>';
  }
  document.querySelector('#portfolio-desk').innerHTML += `<section class="portifolio-list" id="portfolio-desk">
  <div class="portifolio-card">
      <div class="portifolio-image">
          <img src="${projectDetail[i].image}" alt="Snapshoot of portfolio">
      </div>
      <div class="left-block">
          <div class="primary-placeholder">
              <h2 class="project-title">${projectDetail[i].title}</h2>
              <div class="frame2">
                  <div class="client">
                      ${experienceList}
                  </div>
              </div>
          </div>
          <div class="primary-text">
              <p>${projectDetail[i].desription}</p>
          </div>
          <div class="tags">
              <ul class="tags">
                  <li>
                      <p class="tag-text">${tech}</p>
                  </li>
              </ul>
          </div>
          <div class="action">
              <button data-index = "${i}" class="see-project">See Project</button>
          </div>
      </div>
  </div>
</section>`;
}

const displayModal = (i) => {
  let tech = '';
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="tag1"><p class="tag-text">${projectDetail[i].technologies[j]}</p></li>`;
  }

  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    techPop += `<li class="tag1"><p class="tag-text">${projectDetail[i].popupTech[j]}</p></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += k === 0 ? `<li class="list-main">${projectDetail[i].exprience[k]}</li>` : `<li class="titles-item">${projectDetail[i].exprience[k]}</li>`;
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-flex">
      <div>
        <div class="works-flex-pop">
          <h3 class="intro-text-works">${projectDetail[i].title}</h3>
          <span> <a onclick="closePopupModal()" href="" class="close-popup">X</a></span>
      </div>
      <ul class="works-flex-item">
      ${experienceList}
      </ul>
      </div>
      <div class="works-flex-item work-image">
          <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
          <img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
      </div>
      <div class="project-tags">
          <div class="work-description">
            <p class="works-flex-item works-description">
              ${projectDetail[i].popDescription}
            </p>
          </div>
          <div class="popup-tags">
              <ul class="lang-container">
                  ${tech}
              </ul>
              <ul class="lang-container-desk">
                  ${techPop}
              </ul>
              <div class="btn-tags">
                <a href="${projectDetail[i].seeLive}" class="btn-see-project">See Live
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <a href="${projectDetail[i].seeSource}" class="btn-see-project">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
  `;
  popupModal.style.display = 'block';
};

document.querySelectorAll('.first_button').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-index'))));
document.querySelectorAll('.see-project').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-index'))));
const closeModal = document.querySelector('#portfolioPopup');
const closePopupModal = () => {
  closeModal.style.display = 'none';
};
document.querySelector('.close-popup').addEventListener('click', closePopupModal);
