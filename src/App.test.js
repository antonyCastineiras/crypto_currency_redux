import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { A } from './App.js'
import { Provider } from 'react-redux'
import storeFactory from './store/store.js'
import {shallow} from 'enzyme'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const store = storeFactory()

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//   	<Provider store={ store }>
//   		<App />
//   	</Provider>, 
//   	div
//   	);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it("should render a table",() => {
// 	let wrapper = shallow(<A />)
// 	expect(wrapper.find('table').length).toEqual(1)
// })

describe("apiUrl", () => {
	it("returns the correct url based on the state", () => {
		let props = { currency: 'JPY' }
		let app = new A()
		let result = app.apiUrl(props)
		expect(result).toEqual('https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array&convert=JPY')
	})
})

// Test needs completing
// describe("componentDidMount", () => {
// 	it("fetches the api data", () => {
// 		let wrapper = shallow(<App />)
// 		wrapper.instance().fetchApiData = jest.fn()
// 		wrapper.update()
// 		wrapper.instance().componentDidMount()
// 		expect(wrapper.instance().fetchApiData).toHaveBeenCalled()
// 	})
// })
