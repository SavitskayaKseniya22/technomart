import './services.scss';

export default class Services extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'services';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="container">
          <h2>Сервисы</h2>
          <p class="text_regular">
            Хороший интернет-магазин отличается от плохого не только ценами!
            <br />
            Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
          </p>
        <div class="services__content">
          <ul class="services__controls">
            <li>
               <input type="radio" id="delivery" name="services" value="delivery" checked />
               <label for="delivery">Доставка</label>
            </li>
            <li>
            <input type="radio" id="warranty" name="services" value="warranty" />
               <label for="warranty">Гарантия</label>
            </li>
            <li>
            <input type="radio" id="credit" name="services" value="credit" />
               <label for="credit">Кредит</label>
            </li>
          </ul>
          <div class="selected description description_delivery" data-id="delivery">
            <h2>Доставка</h2>
            <p class="text_regular">
              Мы с удовольствием доставим ваш товар прямо к вашему подъезду
              совершенно бесплатно!
              Ведь мы неплохо заработаем, поднимая его на ваш этаж!
            </p>
          </div>
          <div class="description description_warranty" data-id="warranty">
            <h2>Гарантия</h2>
            <p class="text_regular">
              Если купленный у нас товар поломается или заискрит, а также в
              случае пожара, спровоцированного его возгаранием, вы всегда можете
              быть уверены в нашей гарантии. Мы обменяем сгоревший товар на
              новый. Дом уж восстановите как-нибудь сами.
            </p>
          </div>
          <div class="description description_credit" data-id="credit">
            <h2>Кредит</h2>
            <p class="text_regular">
              Залезть в долговую яму стало проще! Кредитные консультанты придут
              вам на помощь.
            </p>
            <button class="btn btn_red btn_in-credit">Отправить заявку</button>
          </div>
        </div>
      </div>
    `
    );
  }

  connectedCallback() {
    this.render();

    this.querySelectorAll('input[name="services"]').forEach((elem) => {
      elem.addEventListener('click', () => {
        this.querySelectorAll('.description').forEach((desc) => {
          if ((desc as HTMLElement).dataset.id === elem.id) {
            desc.classList.add('selected');
          } else {
            desc.classList.remove('selected');
          }
        });
      });
    });
  }
}
