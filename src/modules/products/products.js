import './products.scss';
import imgDrill1 from './assets/drill-1.png';
import imgDrill2 from './assets/drill-2.png';
import imgDrill3 from './assets/drill-3.png';
import imgDrill4 from './assets/drill-4.png';
import imgCart from './assets/icon-cart.svg';

export default function products() {
  const element = document.createElement('div');
  element.id = 'page_goods';

  const productsContent = `
        
        <div class="chapter_menu">
          <h2>Популярные товары</h2>
          <a href="" class="btn btn--red">Все популярные товары</a>
        </div>

        <ul>
          <li class="card_goods">
            <img src=${imgDrill1} alt="Дрель 1" width="180" height="90" />
            <br />
            <button class="btn--buyItem btn">
              <img src=${imgCart} alt="Корзина" />
              Купить
            </button>
            <button class="btn--addBookm btn">В закладки</button>

            <p>Перфоратор BOSCH BFG 9000</p>
            <del>32500 Р.</del>
            <div class="new_price btn">25500 Р.</div>
          </li>
          <li class="card_goods">
            <img src=${imgDrill2} alt="Дрель 2" />
            <br />
            <button class="btn--buyItem btn">
              <img src=${imgCart} alt="Корзина" />
              Купить
            </button>
            <button class="btn--addBookm btn">В закладки</button>
            <p>Перфоратор BOSCH BFG 3000</p>
            <del>22500 Р.</del>
            <div class="new_price btn">15500 Р.</div>
          </li>
          <li class="card_goods">
            <img src=${imgDrill3} alt="Дрель 3" />
            <br />
            <button class="btn--buyItem btn">
              <img src=${imgCart} alt="Корзина" />
              Купить
            </button>
            <button class="btn--addBookm btn">В закладки</button>
            <p>Перфоратор BOSCH BFG 6000</p>
            <del>30500 Р.</del>
            <br />
            <div class="new_price btn">25500 Р.</div>
          </li>
          <li class="card_goods new">
            <img src=${imgDrill4} alt="Дрель 4" />
            <br />
            <button class="btn--buyItem btn">
              <img src=${imgCart} alt="Корзина" />
              Купить
            </button>
            <button class="btn--addBookm btn">В закладки</button>
            <p>Перфоратор BOSCH BFG 2000</p>
            <del></del>
            <br />
            <div class="new_price btn">12500 Р.</div>
          </li>
        </ul>
      
  `;

  element.insertAdjacentHTML('afterbegin', productsContent);
  return element;
}
