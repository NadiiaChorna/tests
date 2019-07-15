import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from './../../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props={}) => shallow(<Headline {...props} />);
describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        test('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () => {
        let wraper;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc'
            };
            wraper = setUp(props);
        });

        test('Should render without errors', () => {
            const component = findByTestAttr(wraper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        test('Should render a h1', () => {
            const component = findByTestAttr(wraper, 'header');
            expect(component.length).toBe(1);
        })

        test('Should render description', () => {
            const component = findByTestAttr(wraper, 'desc');
            expect(component.length).toBe(1);
        })
    });

    describe('Have NO props', () => {

        let wraper;
        beforeEach(() => {
            wraper = setUp();
        })

        test('Should not render', () => {
            const component = findByTestAttr(wraper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        })

    });

})