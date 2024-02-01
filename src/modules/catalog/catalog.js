import './catalog.scss';

export default function catalog() {
  const element = document.createElement('div');
  element.className = 'container';

  const catalogContent = `
<ul class="catalog">
  <li class="catalog__item catalog__item_new">
    <h3 class="catalog-item__title">Материалы</h3>
    <a href="/" class="btn">На любой вкус</a>
  </li>
  <li class="catalog__item">
    <h3 class="catalog-item__title">Инструмент</h3>
    <a href="/" class="btn">На все случаи</a>
  </li>
  <li class="catalog__item">
    <h3 class="catalog-item__title">Техника</h3>
    <a href="/" class="btn">Для стройки</a>
  </li>
  <li class="slider">
    <ul class="slider__controls">
      <li class="selected control"></li>
      <li class="control"></li>
      <li class="control"></li>
    </ul>
    <ul>
      <li class="selected slide">
        <header class="slide__header">
          <h3 class="slide__title">Дрели</h3>
          <p class="slide__addition">Соседям на радость!</p>
        </header>
        <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
      </li>
      <li class="slide">
        <header class="slide__header">
          <h3 class="slide__title">Шуруповерты</h3>
          <p class="slide__addition">Соседям на радость!</p>
        </header>
        <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
      </li>
      <li class="slide">
        <header class="slide__header">
          <h3 class="slide__title">Перфораторы</h3>
          <p class="slide__addition">Соседям на радость!</p>
        </header>
        <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
      </li>
    </ul>
  </li>
  <li class="catalog__item">
    <h3 class="catalog-item__title">Скидки 50%</h3>
    <a href="/" class="btn">На 350 товаров</a>
  </li>
  <li class="catalog__item">
    <h3 class="catalog-item__title">Доставка</h3>
    <a href="/" class="btn">Бесплатно</a>
  </li>
</ul>
  `;

  element.insertAdjacentHTML('afterbegin', catalogContent);
  return element;
}
