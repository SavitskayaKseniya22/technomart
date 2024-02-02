import './header.scss';

import logo from '../../lib/logo/logo';

import iconBookmark from './assets/icon-bookmark.svg';
import iconCart from './assets/icon-cart.svg';
import iconBuy from './assets/icon-buy.svg';
import iconSearch from './assets/icon-search.svg';

export default function header() {
  const element = document.createElement('header');
  element.className = 'header';

  const headerContent = `
 <div class="header__top">
  <div class="container">
    ${logo('slim').outerHTML}

    <div class="header-top__buttons">
      <button class="btn_inform btn_bookmarks">
        <img src="${iconBookmark}" alt="Закладки" width="16" height="16" />

        <span>Закладки :</span>
        0
      </button>

      <button class="btn_inform btn_cart">
        <img src="${iconCart}" alt="Корзина" width="16" height="16" />
        <span>Корзина:</span>
        0
      </button>

      <button class="btn_order">
        <img src="${iconBuy}" alt="Оформить заказ" width="26" height="26" />
        <span>Оформить заказ</span>
      </button>

      <label for="search-panel" class="btn_search">
        <img src="${iconSearch}" alt="Оформить заказ" width="20" height="20" />
      </label>
    </div>
    <input type="checkbox" id="search-panel" />

    <input type="text" name="search" placeholder="Поиск:" />
  </div>
</div>

<div class="header__contacts container">
  <p class="header-contacts__info">
    Интернет-магазин строительных материалов и инструментов для ремонта
  </p>

  <p class="header-contacts__details">
    <a href="tel:+78125550555" class="details_tel">+7 (812) 555-05-55</a>
    <span class="details_adress">
      г. Санкт-Петербург, ул. Б. Конюшенная, д.19/8
    </span>
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
  <li class="header__navigation_sub"><a href="/">Спецпредложения</a></li>
  <li class="header__navigation_sub"><a href="/">Доставка</a></li>
  <li class="header__navigation_sub"><a href="/">Контакты</a></li>
</ul>
  `;

  element.insertAdjacentHTML('afterbegin', headerContent);
  return element;
}
