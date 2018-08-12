import Table from '../../components/table/table.js'
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import React from 'react'

configure({ adapter: new Adapter() });

describe("<TABLE>", () => {
	it("renders a table", () => {
		let wrapper = shallow(<Table />)
		expect(wrapper.find('table').length).toEqual(1)
	})

	it("renders a table head", () => {
		let wrapper = shallow(<Table />)
		expect(wrapper.find('thead').length).toEqual(1)
	})

	it("renders a table body", () => {
		let wrapper = shallow(<Table />)
		expect(wrapper.find('tbody').length).toEqual(1)
	})

	it("renders the same amount of rows as the datas length", () => {
		let data = [{},{},{},{}]
		let wrapper = shallow(<Table data={data}/>)
		expect(wrapper.find('tr').length).toEqual(4)
	})
})