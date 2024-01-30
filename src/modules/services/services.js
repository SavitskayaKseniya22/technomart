import './services.scss';

export default function services() {
  const element = document.createElement('div');
  element.id = 'page_advantages';

  const servicesContent = `
      <div class="container">
        <div>
          <h2>Сервисы</h2>
          <p>
            Хороший интернет-магазин отличается от плохого не только ценами!
            <br />
            Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
          </p>
        </div>
        <div id="description_service">
          <ul id="advantages_catalog">
            <li>
              <button id="delivery_button" class="activ advantages_button">
                Доставка
              </button>
            </li>
            <li>
              <button id="warranty_button" class="advantages_button">
                Гарантия
              </button>
            </li>
            <li>
              <button id="credit_button" class="advantages_button">
                Кредит
              </button>
            </li>
          </ul>

          <div id="delivery" class="description">
            <h2>Доставка</h2>
            <p>
              Мы с удовольствием доставим ваш товар прямо к вашему подъезду
              совершенно бесплатно!
              <br />
              Ведь мы неплохо заработаем, поднимая его на ваш этаж!
            </p>
          </div>
          <div id="warranty" class="description none">
            <h2>Гарантия</h2>
            <p>
              Если купленный у нас товар поломается или заискрит, а также в
              случае пожара, спровоцированного его возгаранием, вы всегда можете
              быть уверены в нашей гарантии. Мы обменяем сгоревший товар на
              новый. Дом уж восстановите как-нибудь сами.
            </p>
          </div>
          <div id="credit" class="description none">
            <h2>Кредит</h2>
            <p>
              Залезть в долговую яму стало проще! Кредитные консультанты придут
              вам на помощь.
            </p>
            <button class="btn btn--red">Отправить заявку</button>
          </div>
        </div>
      </div>
  `;

  element.insertAdjacentHTML('afterbegin', servicesContent);
  return element;
}
