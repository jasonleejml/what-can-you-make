import React from 'react'
import { Provider } from 'react-redux'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../../reducers'
import Home from '../../Containers/Home'

configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

describe('<Home />', () => {
    test('should render the Home component', () => {
        const wrapper = shallow(<Provider store={store}><Home /></Provider>)
        const component = wrapper.dive()

        expect(toJson(component)).toMatchSnapshot()
    })
})