import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import Header from './index';

const setUp = (props={}) => shallow(<Header {...props}/>);

describe('Header Component', () => {
    let component;
    beforeEach(()=> component = setUp());

    test('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    test('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })
})