import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './about/About';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('intro')
);

ReactDOM.render(
  <Portfolio />,
  document.getElementById('portfolio')
);

ReactDOM.render(
  <About />,
  document.getElementById('about')
);

ReactDOM.render(
  <Contact />,
  document.getElementById('contact')
);