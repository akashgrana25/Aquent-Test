import React from 'react';
import {expect} from 'chai';
import { shallow, mount } from 'enzyme';
import PizzaList from '../src/components/PizzaList';
import { 
    findRenderedDOMComponentWithTag, 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';

describe('PizzaList', () => {

    it('should render an input field and a button ', () => {
        const render = renderIntoDocument(
			<PizzaList />
		);
        const inputField = scryRenderedDOMComponentsWithTag(render, 'input');
        const button = scryRenderedDOMComponentsWithTag(render, 'button');
        expect(inputField).to.be.ok;
        expect(button).to.be.ok;
    });

    it('should have list with a length of 0 before render ', () => {
        const wrapper = shallow(<PizzaList />);
        expect(wrapper.find('.list')).to.have.length(0);

    });

    it('should have list with a filter_list of 0 before render ', () => {
        const wrapper = shallow(<PizzaList />);
        expect(wrapper.find('.filter_list')).to.have.length(0);

    });

    it('should have list that is an array object ', () => {
        const wrapper = shallow(<PizzaList />);
        expect(wrapper.find('.list')).to.be.a('object');

    });

    it('should have filter_list that is an array object ', () => {
        const wrapper = shallow(<PizzaList />);
        expect(wrapper.find('.filter_list')).to.be.a('object');

    });

    it('passes onChange to input', () => {
        const wrapper = shallow(<PizzaList />);
        const inputField = wrapper.find('input');
        const onChange = wrapper.instance().onChange
        expect(inputField.prop('onChange')).to.eql(onChange);
    });

});
