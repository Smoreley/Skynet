import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';
import ShoppingList from './src/components/Shopping.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<ShoppingList />, document.getElementById('cart'));