import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import storeFactory from './store/store.js'
import * as actions from './store/actions.js'

const store = storeFactory()

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('root')
)

registerServiceWorker();
