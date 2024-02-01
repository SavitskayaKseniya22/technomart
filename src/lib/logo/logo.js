import './logo.scss';

export default function logo(type) {
  const element = document.createElement('a');
  element.href = '/';
  element.className = type === 'wide' ? 'logo logo_wide' : 'logo logo_slim';
  element.innerHTML = `<h1>Техномарт</h1>`;
  return element;
}
