import 'normalize.css';
import './style.scss';

import Footer from './modules/footer/footer';
import Contacts from './modules/contacts/contacts';
import Services from './modules/services/services';
import Header from './modules/header/header';
import Catalog from './modules/catalog/catalog';
import Manufacturers from './modules/manufacturers/manufacturers';
import Products from './modules/products/products';

customElements.define('header-custom', Header, { extends: 'div' });
customElements.define('catalog-custom', Catalog, { extends: 'div' });
customElements.define('products-custom', Products, { extends: 'div' });
customElements.define('manufacturers-custom', Manufacturers, {
  extends: 'div',
});
customElements.define('services-custom', Services, { extends: 'div' });
customElements.define('contacts-custom', Contacts, { extends: 'div' });
customElements.define('footer-custom', Footer, { extends: 'div' });

function App() {
  return `
  <div is="header-custom"></div>
  <div is="catalog-custom"></div>
  <div is="products-custom"></div>
  <div is="manufacturers-custom"></div>
  <div is="services-custom"></div>
  <div is="contacts-custom"></div>
  <div is="footer-custom"></div>`;
}

document.body.insertAdjacentHTML('beforeend', App());
