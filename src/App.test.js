import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Title',
                body: 'some description'
            },
            {
                title: 'Title1',
                body: 'some description'
            },
            {
                title: 'Title2',
                body: 'some description'
            }]
        }
        wrapper = setUp(initialState)
    });

    test('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})