import configureStore from 'redux-mock-store'
import { fetchedRecipe, fetchingRecipe, failedRecipe } from '../../actions'
import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE } from '../../actions'

const mockStore = configureStore()
const store = mockStore()


describe('Recipe Actions', () => {
    beforeEach(() => {
        store.clearActions()
    })
    
    test('fetchingRecipe dispatches the correct action and payload', () => {
        store.dispatch(fetchingRecipe())

        const actions = store.getActions()
        const expectedPayload = { type: GET_RECIPE }
        expect(actions).toEqual([expectedPayload])
    })

    test('fetchedRecipe dispatches the correct action and payload', () => {
        const payload = [{'1': 'banana'}]
        
        store.dispatch(fetchedRecipe(payload))

        const actions = store.getActions()
        const expectedPayload = { type: RECEIVE_RECIPE, payload: [{'1': 'banana'}] }
        expect(actions).toEqual([expectedPayload])
    })

    test('failedRecipe dispatches the correct action and payload', () => {
        const payload = [{'1': 'banana'}]
        
        store.dispatch(failedRecipe(payload))

        const actions = store.getActions()
        const expectedPayload = { type: FAIL_RECIPE, payload: [{'1': 'banana'}] }
        expect(actions).toEqual([expectedPayload])
    })    
})