import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import myReducer from './reducers/Reducer';

import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(myReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, rootElement);
