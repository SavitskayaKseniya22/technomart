import './catalog.scss';

export default function catalog() {
  const element = document.createElement('div');
  element.id = 'page_catalog';

  const catalogContent = `
        <ul id="mainCatalog">
          <li class="mainCatalogCard newCard">
            <h3>Материалы</h3>
            <br />
            <a href="" class="btn">На любой вкус</a>
          </li>
          <li class="mainCatalogCard">
            <h3>Инструмент</h3>
            <br />
            <a href="" class="btn">На все случаи</a>
          </li>
          <li class="mainCatalogCard">
            <h3>Техника</h3>
            <br />
            <a href="" class="btn">Для стройки</a>
          </li>

          <li id="slider">
            <ul id="control">
              <li class="pointed point"></li>
              <li class="point"></li>
              <li class="point"></li>
            </ul>
            <ul>
              <li class="main_slide slide">
                <header>
                  <h3>Дрели</h3>
                  <p>Соседям на радость!</p>
                </header>
                <a href="" class="btn btn--red">Открыть каталог</a>
              </li>
              <li class="none slide">
                <header>
                  <h3>Шуруповерты</h3>
                  <p>Соседям на радость!</p>
                </header>
                <a href="" class="btn btn--red">Открыть каталог</a>
              </li>
              <li class="none slide">
                <header>
                  <h3>Перфораторы</h3>
                  <p>Соседям на радость!</p>
                </header>
                <a href="" class="btn btn--red">Открыть каталог</a>
              </li>
            </ul>
          </li>

          <li class="mainCatalogCard">
            <h3>Скидки 50%</h3>
            <br />
            <a href="" class="btn">На 350 товаров</a>
          </li>
          <li class="mainCatalogCard">
            <h3>Доставка</h3>
            <br />
            <a href="" class="btn">Бесплатно</a>
          </li>
        </ul>
      

  `;

  element.insertAdjacentHTML('afterbegin', catalogContent);
  return element;
}
