import React from 'react'
import Recipe from '../../Containers/Recipe'
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

describe('<Recipe />', () => {
    test('should render the Recipe component', () => {
        const wrapper = shallow(<Recipe store={store} />)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
    })
})