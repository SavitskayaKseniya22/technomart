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
      <li>

      <input type="radio" id="first" name="catalog__slider" value="first" checked />
      <label class="control" for="first" ></label>

      </li>
      <li>
      <input type="radio" id="second" name="catalog__slider" value="second" />
      <label class="control" for="second"></label>
      </li>
      <li>
      <input type="radio" id="third" name="catalog__slider" value="third" />
      <label class="control" for="third"></label>
      </li>
      
    </ul>
    <ul>

      <li class="selected slide" data-id="first">
        <header class="slide__header">
          <h3 class="slide__title">Дрели</h3>
          <p class="slide__addition">Соседям на радость!</p>
        </header>
        <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
      </li>
      <li class="slide" data-id="second">
        <header class="slide__header">
          <h3 class="slide__title">Шуруповерты</h3>
          <p class="slide__addition">Соседям на радость!</p>
        </header>
        <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
      </li>
      <li class="slide" data-id="third">
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

  const slides = ['first', 'second', 'third'];

  let activeSlide = 0;

  element.insertAdjacentHTML('afterbegin', catalogContent);

  element.querySelectorAll('input[name="catalog__slider"]').forEach((elem) => {
    elem.addEventListener('click', () => {
      activeSlide = slides.indexOf((elem as HTMLInputElement).value);

      element.querySelectorAll('.slide').forEach((slide) => {
        if ((slide as HTMLElement).dataset.id === elem.id) {
          slide.classList.add('selected');
        } else {
          slide.classList.remove('selected');
        }
      });
    });
  });

  setInterval(() => {
    if (activeSlide === slides.length - 1) {
      activeSlide = 0;
    } else {
      activeSlide += 1;
    }

    (element.querySelector(`input[id='${slides[activeSlide]}']`) as HTMLInputElement).checked = true;

    element.querySelectorAll('.slide').forEach((slide) => {
      if ((slide as HTMLElement).dataset.id === slides[activeSlide]) {
        slide.classList.add('selected');
      } else {
        slide.classList.remove('selected');
      }
    });
  }, 3000);

  return element;
}
