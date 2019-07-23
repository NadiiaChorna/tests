import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAttr, checkProps } from './../../../Utils';

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        test('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Title example',
                desc: 'Some Text'
            }
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    });

    describe('Componen Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Title example',
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        });
        test('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        test('Should render a description', () => {
            const description = findByTestAttr(wrapper, 'componentDescription');
            expect(description.length).toBe(1);
        })
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        });
        test('Should not render', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    })
    
})
