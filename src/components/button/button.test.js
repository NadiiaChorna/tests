import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        test('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            const propError = checkProps(SharedButton, expectedProps);
            expect(propError).toBeUndefined();
        })
    });

    describe('Renders', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example button text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        test('Should Render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
    

})