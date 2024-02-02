import './products.scss';
import imgDrill1 from './assets/drill-1.png';
import imgDrill2 from './assets/drill-2.png';
import imgDrill3 from './assets/drill-3.png';
import imgDrill4 from './assets/drill-4.png';
import imgCart from './assets/icon-cart.svg';

import chapterTitle from '../../lib/chapter-title/chapter-title';

const productsData = [
  {
    title: 'Перфоратор BOSCH BFG 9000',
    image: imgDrill1,
    price: { old: 32500, new: 25500 },
    isItNew: false,
  },
  {
    title: 'Перфоратор BOSCH BFG 3000',
    image: imgDrill2,
    price: { old: 22500, new: 15500 },
    isItNew: false,
  },
  {
    title: 'Перфоратор BOSCH BFG 6000',
    image: imgDrill3,
    price: { old: 30500, new: 25999 },
    isItNew: false,
  },
  {
    title: 'Перфоратор BOSCH BFG 2000',
    image: imgDrill4,
    price: { old: undefined, new: 25500 },
    isItNew: true,
  },
];

export default function products() {
  const element = document.createElement('div');
  element.className = 'container';

  const productsContent = `
        
         ${chapterTitle({ title: 'популярные товары', link: '/' }).outerHTML}

        <ul class="products__list">
        ${productsData
          .map((item) => {
            return `<li class="products__item ${item.isItNew ? 'products__item_new' : ''}">

            <div class="products-item__controls products-item__controls_image">
              <img src=${item.image} alt=${item.title} />
            </div>

            <div class="products-item__controls products-item__controls_buttons">
              <button class="btn btn_buy">
                <img src=${imgCart} alt="Корзина" />
                Купить
              </button>
              <button class="btn btn_add">В закладки</button>
            </div>
            <div class="products-item__content">
              <p>${item.title}</p>
              <del>${item.price.old || ''}${item.price.old ? ' &#8381;' : ''}</del>
              <div class="btn btn_new">${item.price.new} &#8381;</div>
            </div>
          </li>`;
          })
          .join('')}
        </ul>
      
  `;

  element.insertAdjacentHTML('afterbegin', productsContent);
  return element;
}
