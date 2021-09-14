import configureStore from 'redux-mock-store'
import { fetchedSearch, fetchingSearch, failedSearch } from '../../actions'
import { GET_SEARCH, RECEIVE_SEARCH, FAIL_SEARCH } from '../../actions'

const mockStore = configureStore()
const store = mockStore()


describe('Search Actions', () => {
    beforeEach(() => {
        store.clearActions()
    })
    
    test('fetchingSearch dispatches the correct action and payload', () => {
        store.dispatch(fetchingSearch())

        const actions = store.getActions()
        const expectedPayload = { type: GET_SEARCH }
        expect(actions).toEqual([expectedPayload])
    })

    test('fetchedSearch dispatches the correct action and payload', () => {
        const payload = [{'1': 'banana'}]
        
        store.dispatch(fetchedSearch(payload))

        const actions = store.getActions()
        const expectedPayload = { type: RECEIVE_SEARCH, payload: [{'1': 'banana'}] }
        expect(actions).toEqual([expectedPayload])
    })

    test('failedSearch dispatches the correct action and payload', () => {
        const payload = [{'1': 'banana'}]
        
        store.dispatch(failedSearch(payload))

        const actions = store.getActions()
        const expectedPayload = { type: FAIL_SEARCH, payload: [{'1': 'banana'}] }
        expect(actions).toEqual([expectedPayload])
    })    
})