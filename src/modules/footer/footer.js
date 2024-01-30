import './footer.scss';

import imgVKLogo from './assets/vk-icon.png';
import imgFBLogo from './assets/fb-icon.png';
import imgInstagramLogo from './assets/insta-icon.png';

export default function footer() {
  const element = document.createElement('footer');
  element.id = 'footer';

  const footerContent = `
      <div class="container">
        <div id="footer_top_panel">
          <a href="" class="name_store">Техномарт</a>
          <nav>
            <ul>
              <li><a href="">Компания</a></li>
              <li><a href="">Новости</a></li>
              <li><a href="">Каталог</a></li>
              <li><a href="">Доставка</a></li>
              <li><a href="">Контакты</a></li>
            </ul>
          </nav>
        </div>
        <div id="footer_middle_panel">
          <p>
            Г. Санкт-Петербург, ул. Конюшенная, д.19/8
            <br />
            +7 (812) 555-05-55
          </p>
          <nav>
            <ul>
              <li><a href="">Материалы</a></li>
              <li><a href="">Техника</a></li>
              <li><a href="">Инструмент</a></li>
              <li><a href="">Спецпредложения</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="footer_bottom_panel">
        <div class="container">
          <p>
            © 2010-2017 Компания «Техномарт»
            <br />
            Все права защищены
          </p>
          <ul id="social_media">
            <li>
              <a href=""><img src=${imgVKLogo} alt="Вконтакте" /></a>
            </li>
            <li>
              <a href=""><img src=${imgFBLogo} alt="Фейсбук" /></a>
            </li>
            <li>
              <a href=""><img src=${imgInstagramLogo} alt="Инстаграм" /></a>
            </li>
          </ul>

          <p>
            Обратная связь
            <br />
            <a href="" class="urls">mail@htmlacademy.ru</a>
          </p>
          <p>
            PSD-макет разработан -
            <br />
            <a href="" class="urls">Htmlacademy.ru</a>
          </p>
        </div>
      </div>
    
  `;

  element.insertAdjacentHTML('afterbegin', footerContent);
  return element;
}
