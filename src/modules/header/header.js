import './header.scss';

export default function header() {
  const element = document.createElement('header');
  element.id = 'page_catalog';
  element.className = 'header';

  const headerContent = `
       
      <div class="top_header">
        <div class="container">
          <a href="" class="name_store">
            <h1>Техномарт</h1>
          </a>

          <form action="https://echo.htmlacademy.ru" method="get">
            <input type="text" name="search" placeholder="Поиск:" />
          </form>

          <div class="inform bookmark">
            <span>Закладки: 0</span>
          </div>
          <div class="inform cart">
            <span>Корзина: 0</span>
          </div>
          <form>
            <button class="get_order">Оформить заказ</button>
          </form>
        </div>
      </div>

      <div id="contactAndEnter">
        <p id="about_store">
          <i>
            Интернет-магазин строительных материалов и инструментов для ремонта
          </i>
        </p>
        <p id="contacts_top">
          <span class="number"><b>+7 (812) 555-05-55</b></span>
          <span>г. Санкт-Петербург, ул. Б. Конюшенная, д.19/8</span>
        </p>
        <div>
          <a href="" class="enter but">Войти</a>
          <a href="" class="registr but">Регистрация</a>
        </div>
      </div>
      <nav>
        <ul class="navigation">
          <li><a href="">Главная</a></li>
          <li><a href="">Компания</a></li>
          <li><a href="">Каталог</a></li>
          <li><a href="">Новости</a></li>
          <li><a href="">Спецпредложения</a></li>
          <li><a href="">Доставка</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </nav>
    
  `;

  element.insertAdjacentHTML('afterbegin', headerContent);
  return element;
}
