import './footer.scss';

import imgVKLogo from './assets/vk-icon.png';
import imgFBLogo from './assets/fb-icon.png';
import imgInstagramLogo from './assets/insta-icon.png';

import logo from '../../lib/logo/logo';

export default function footer() {
  const element = document.createElement('footer');
  element.className = 'footer';

  const footerContent = `
      <div class="container">

        <div class="footer__panel_top">
          ${logo('wide').outerHTML}
          
            <ul class="footer__nav-list_main">
              <li><a href="/">Компания</a></li>
              <li><a href="/">Новости</a></li>
              <li><a href="/">Каталог</a></li>
              <li><a href="/">Доставка</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
          
        </div>
        <div class="footer__panel_middle">
          <p class="footer__adress">
          <span>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</span>
          <span> +7 (812) 555-05-55</span>
          </p>
            <ul class="footer__nav-list_sub">
              <li><a href="/">Материалы</a></li>
              <li><a href="/">Техника</a></li>
              <li><a href="/">Инструмент</a></li>
              <li><a href="/">Спецпредложения</a></li>
            </ul>
        </div>
      </div>

      <div class="footer__panel_bottom">

        <div class="container">


          <p class="footer__rights">
           <span>© 2010-2017 Компания «Техномарт»</span>
            <span>Все права защищены</span>
            
          </p>

          <ul class="socials">
            <li>
              <a href="/"><img src=${imgVKLogo} alt="Вконтакте" /></a>
            </li>
            <li>
              <a href="/"><img src=${imgFBLogo} alt="Фейсбук" /></a>
            </li>
            <li>
              <a href="/"><img src=${imgInstagramLogo} alt="Инстаграм" /></a>
            </li>
          </ul>

          <p class="footer__feedback">
          <span>Обратная связь -</span>
            
            
            <a href="/" class="link_regular">mail@htmlacademy.ru</a>
          </p>

          <p class="footer__autors">
           <span>PSD-макет разработан -</span>
            
            
            <a href="/" class="link_regular">Htmlacademy.ru</a>
          </p>

        </div>

      </div>
    
  `;

  element.insertAdjacentHTML('afterbegin', footerContent);
  return element;
}
