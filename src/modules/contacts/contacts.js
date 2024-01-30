import './contacts.scss';
import imgMap from './assets/map.png';
import imgCross from './assets/cross_out.png';

export default function constacts() {
  const element = document.createElement('div');
  element.id = 'page_contacts';

  const constactsContent = `
      
      <div class="container">
        <div id="about_delivery">
          <h2>Компания «техномарт»</h2>

          <p>
            Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров
            для ремонта и строительства не оставит равнодушными любителей
            сэкономить на гастарбайтерах
          </p>
          <p>
            Мы можем доставить ваш товар в самые отдаленные точки России!
            <br />
            Техномарт работает со многими транспортными компаниями:
          </p>
          <ul>
            <li>Деловые линии</li>
            <li>Автотрейдинг</li>
            <li>ЖелДорЭкспедиция</li>
          </ul>
          <a href="" class="btn btn--red">Подробнее о компании</a>
        </div>
        <div id="about_map">
          <h2>Контакты</h2>
          <p>
            Вы можете забрать товар сами,
            <br />
            заехав в наш офис:
          </p>
          <img
            id="map_img_small"
            src=${imgMap}
            alt="карта"
            width="300"
            height="160"
          />

          <button id="btn_writeUs" class="btn btn--red btn_wrireUs">
            Заблудились? Напишите нам!
          </button>
          <div id="modal-map" class="modal none">
            <iframe
              id="map_img_big"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037872533216!2d30.32085871644137!3d59.93871648187625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1612486386835!5m2!1sru!2sru"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              width="970"
              height="480"
            ></iframe>

            <img class="cross" src=${imgCross} alt="Крестик" />
          </div>

          <div class="modal none" id="modal-writeUs">
            <form action="">
              <div id="formFields">
                <label>
                  Ваше имя:
                  <br />
                  <input type="text" placeholder="Представьтесь, пожалуйста" />
                </label>
                <label>
                  Ваш e-mail:
                  <br />
                  <input type="email" placeholder="Для отправки ответа" />
                </label>
              </div>

              <div id="textMessage">
                <label>
                  Текст письма:
                  <br />
                  <textarea
                    name="letter"
                    placeholder="В свободной форме"
                  ></textarea>
                </label>
              </div>

              <footer id="footerForm">
                <button class="btn btn--red">Отправить</button>
              </footer>
              <img class="cross" src=${imgCross} alt="Крестик" />
            </form>
          </div>
        </div>
      </div>
    
  `;

  element.insertAdjacentHTML('afterbegin', constactsContent);
  return element;
}
