import './manufacturers.scss';

import chapterTitle from '../../lib/chapter-title/chapter-title';

import imgBosch from './assets/bosch.png';
import imgMakita from './assets/Makita.png';
import imgDeWALT from './assets/DeWALT.png';
import imgInter from './assets/Интерскол.png';
import imgHitachi from './assets/Hitachi.png';
import imgLG from './assets/LG.png';
import imgAEG from './assets/AEG.png';
import imgMetabo from './assets/Metabo.png';

const manufacturersData = [
  { title: 'bosch', image: imgBosch, link: '/' },
  { title: 'Makita', image: imgMakita, link: '/' },
  { title: 'DeWALT', image: imgDeWALT, link: '/' },
  { title: 'Интерскол', image: imgInter, link: '/' },
  { title: 'Hitachi', image: imgHitachi, link: '/' },
  { title: 'LG', image: imgLG, link: '/' },
  { title: 'AEG', image: imgAEG, link: '/' },
  { title: 'Metabo', image: imgMetabo, link: '/' },
];

export default function manufacturers() {
  const element = document.createElement('div');
  element.className = 'container';

  const manufacturersContent = `
        ${chapterTitle({ title: 'популярные проивзодители', link: '/' }).outerHTML}
        <ul class="manufacturers__list">
        ${manufacturersData
          .map((item) => {
            return `<li>
            <a href=${item.link} class="manufacturers__item"><img src=${item.image} alt=${item.title} /></a>
          </li>`;
          })
          .join('')}
        </ul>
  `;

  element.insertAdjacentHTML('afterbegin', manufacturersContent);
  return element;
}
