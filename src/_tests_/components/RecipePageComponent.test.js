import React from 'react'
import RecipePage from '../../pages/RecipePage'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../../reducers'

configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

describe('<RecipePage />', () => {
    test('should render the RecipePage component', () => {
        const wrapper = shallow(<RecipePage store={store} />)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
    })
})