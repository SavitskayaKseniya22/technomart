import './contacts.scss';

import imgMap from './assets/map.png';
import imgCross from './assets/cross_out.png';

export default class Contacts extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'contacts';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="container">
        <div class="contacts__delivery-info">
          <h2>Компания «техномарт»</h2>
          <p class="text_regular">
            Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров
            для ремонта и строительства не оставит равнодушными любителей
            сэкономить на гастарбайтерах
          </p>
          <p class="text_regular">
            Мы можем доставить ваш товар в самые отдаленные точки России!
            <br />
            Техномарт работает со многими транспортными компаниями:
          </p>
          <ul class="delivery-info__list">
            <li>Деловые линии</li>
            <li>Автотрейдинг</li>
            <li>ЖелДорЭкспедиция</li>
          </ul>
          <a href="/" class="btn btn_red btn_in-delivery-info">Подробнее о компании</a>
        </div>
        <div class="contacts__details">
          <h2>Контакты</h2>
          <p class="text_regular">
            Вы можете забрать товар сами,
            <br />
            заехав в наш офис:
          </p>
          <img
            class="map"
            src=${imgMap}
            alt="карта"
            width="300"
            height="160"
          />
          <button class="btn btn_red btn_in-contacts-details">
            Заблудились? Напишите нам!
          </button>
        </div>
      </div> 
    `
    );
  }

  connectedCallback() {
    this.render();

    this.querySelector('.map')?.addEventListener('click', () => {
      this.insertAdjacentHTML(
        'afterbegin',
        `
<div class="modal">
  <div class="modal__content modal__content_map">
    <iframe
      id="map_img_big"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037872533216!2d30.32085871644137!3d59.93871648187625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1612486386835!5m2!1sru!2sru"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <button type="button" class="modal__button">
      <img src="${imgCross}" alt="Крестик" />
    </button>
  </div>
</div>`
      );

      document
        .querySelector('.modal__button')
        ?.addEventListener('click', () => {
          document.querySelector('.modal')?.remove();
        });
    });

    this.querySelector('.btn_in-contacts-details')?.addEventListener(
      'click',
      () => {
        this.insertAdjacentHTML(
          'afterbegin',
          `
<div class="modal">
  <div class="modal__content modal__content_contacts-form" >
    
  <form action="">

  <div class="contacts-form__content">
  <div class="contacts-form__credentials">
      <label>
        Ваше имя:
        <input type="text" placeholder="Представьтесь, пожалуйста" />
      </label>
      <label>
        Ваш e-mail:
        <input type="email" placeholder="Для отправки ответа" />
      </label>
    </div>
    <div class="contacts-form__message">
      <label>
        Текст письма:
        <textarea name="letter" placeholder="В свободной форме"></textarea>
      </label>
    </div>
  </div>
    <footer class="contacts-form__submition">
      <button class="btn btn_red">Отправить</button>
    </footer>
    <button type="button" class="modal__button">
      <img src="${imgCross}" alt="Крестик" />
    </button>
    </form>
  </div>
</div>`
        );

        document
          .querySelector('.modal__button')
          ?.addEventListener('click', () => {
            document.querySelector('.modal')?.remove();
          });
      }
    );
  }
}
