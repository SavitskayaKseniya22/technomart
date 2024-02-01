import './header.scss';

import logo from '../../lib/logo/logo';

export default function header() {
  const element = document.createElement('header');
  element.className = 'header';

  const headerContent = `
       
      <div class="header__top">
        <div class="container">
           ${logo('slim').outerHTML}
            <input type="text" name="search" placeholder="Поиск:" />
         
          <button class="btn_inform btn_bookmarks">
            Закладки: 0
          </button>
          <button class="btn_inform btn_cart">
            Корзина: 0
          </button>
          <button class="btn_order">Оформить заказ</button>
        </div>
      </div>

      <div class="header__contacts container">

        <p class="header-contacts__info">
            Интернет-магазин строительных материалов и инструментов для ремонта
        </p>

        <p class="header-contacts__details">
          <a href="tel:+78125550555" class="details_tel">+7 (812) 555-05-55</a>
          <span class="details_adress">г. Санкт-Петербург, ул. Б. Конюшенная, д.19/8</span>
        </p>

        <div class="header-contacts__auth">
          <a href="/" class="btn__auth_login btn__auth">Войти</a>
          <a href="/" class="btn__auth_reg btn__auth">Регистрация</a>
        </div>

      </div>

      
      
        <ul class="header__navigation container">
          <li><a href="/">Главная</a></li>
          <li><a href="/">Компания</a></li>
          <li><a href="/">Каталог</a></li>
          <li><a href="/">Новости</a></li>
          <li><a href="/">Спецпредложения</a></li>
          <li><a href="/">Доставка</a></li>
          <li><a href="/">Контакты</a></li>
        </ul>
      
    
  `;

  element.insertAdjacentHTML('afterbegin', headerContent);
  return element;
}
