import './services.scss';

export default function services() {
  const element = document.createElement('div');
  element.className = 'services';

  const servicesContent = `
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
              <button id="delivery_button" class="selected advantages_button">
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


          <div class="selected description description_delivery">
            <h2>Доставка</h2>
            <p class="text_regular">
              Мы с удовольствием доставим ваш товар прямо к вашему подъезду
              совершенно бесплатно!
              Ведь мы неплохо заработаем, поднимая его на ваш этаж!
            </p>
          </div>

          <div class="description description_warranty">
            <h2>Гарантия</h2>
            <p class="text_regular">
              Если купленный у нас товар поломается или заискрит, а также в
              случае пожара, спровоцированного его возгаранием, вы всегда можете
              быть уверены в нашей гарантии. Мы обменяем сгоревший товар на
              новый. Дом уж восстановите как-нибудь сами.
            </p>
          </div>

          <div class="description description_credit">
            <h2>Кредит</h2>
            <p class="text_regular">
              Залезть в долговую яму стало проще! Кредитные консультанты придут
              вам на помощь.
            </p>
            <button class="btn btn_red btn_in-credit">Отправить заявку</button>
          </div>

        </div>
      </div>
  `;

  element.insertAdjacentHTML('afterbegin', servicesContent);
  return element;
}
