import './chapter-title.scss';

export default function chapterTitle({ title, link }) {
  const element = document.createElement('div');
  element.href = '/';
  element.className = 'chapter-title';
  element.innerHTML = `
  <h2>${title}</h2>
  <a href=${link} class="btn btn_red chapter-title__btn">Все ${title}</a>
`;
  return element;
}
