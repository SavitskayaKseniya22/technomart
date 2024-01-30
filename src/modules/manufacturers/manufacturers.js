import './manufacturers.scss';

import imgBosch from './assets/bosch.png';
import imgMakita from './assets/Makita.png';
import imgDeWALT from './assets/DeWALT.png';
import imgInter from './assets/Интерскол.png';
import imgHitachi from './assets/Hitachi.png';
import imgLG from './assets/LG.png';
import imgAEG from './assets/AEG.png';
import imgMetabo from './assets/Metabo.png';

export default function manufacturers() {
  const element = document.createElement('div');
  element.id = 'page_produce';

  const manufacturersContent = `
        <div class="chapter_menu">
          <h2>Популярные производители</h2>
          <a href="" class="btn btn--red">Все производители</a>
        </div>
        <ul id="cards_producers">
          <li>
            <a href=""><img src=${imgBosch} alt="Бош" /></a>
          </li>
          <li>
            <a href=""><img src=${imgMakita} alt="Макита" /></a>
          </li>
          <li>
            <a href=""><img src=${imgDeWALT} alt="ДеВолт" /></a>
          </li>
          <li>
            <a href=""><img src=${imgInter} alt="Интерскол" /></a>
          </li>
          <li>
            <a href=""><img src=${imgHitachi} alt="Хитачи" /></a>
          </li>
          <li>
            <a href=""><img src=${imgLG} alt="Элджи" /></a>
          </li>
          <li>
            <a href=""><img src=${imgAEG} alt="АЕГ" /></a>
          </li>
          <li>
            <a href=""><img src=${imgMetabo} alt="Митабо" /></a>
          </li>
        </ul>
  `;

  element.insertAdjacentHTML('afterbegin', manufacturersContent);
  return element;
}
