import 'normalize.css';
import './style.scss';

import footer from './modules/footer/footer';
import contacts from './modules/contacts/contacts';
import services from './modules/services/services';
import header from './modules/header/header';
import catalog from './modules/catalog/catalog';
import manufacturers from './modules/manufacturers/manufacturers';
import products from './modules/products/products';

function getContainer() {
  const element = document.createElement('div');
  element.appendChild(header());
  element.appendChild(catalog());
  element.appendChild(products());
  element.appendChild(manufacturers());
  element.appendChild(catalog());
  element.appendChild(services());
  element.appendChild(contacts());
  element.appendChild(footer());
  return element;
}

document.body.appendChild(getContainer());
