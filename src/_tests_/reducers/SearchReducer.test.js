import { RECEIVE_SEARCH, GET_SEARCH, FAIL_SEARCH } from "../../actions";
import search from "../../reducers/search";

const initialState = {
    recipes: null,
    isLoading: false,
    error: null
}

describe("Search Reducers", () => {
    test('should return initial state when type is incorrect', () => {
        expect(search(initialState, {type:'DUMMY_ACTION'})).toEqual(initialState)
    })


    test('should return expected state for fetching search', () => {
        const action = {
            type: GET_SEARCH
        }

        const expectedState = {
            recipes: null,
            isLoading: true,
            error: null
        }

        expect(search(initialState, action)).toEqual(expectedState)
    })

    test('should return expected state for fetched search', () => {
        const action = {
            type: RECEIVE_SEARCH,
            payload: [{'name': 'banana'}]
        }

        const previousState = {
            recipes: null,
            isLoading: true,
            error: null
        }

        const expectedState = {
            recipes: [{'name': 'banana'}],
            isLoading: false,
            error: null
        }

        expect(search(previousState, action)).toEqual(expectedState)
    })

    test('should return expected state for failed search', () => {
        const action = {
            type: FAIL_SEARCH,
            payload: [{'name': 'banana'}]
        }

        const previousState = {
            recipes: null,
            isLoading: true,
            error: null
        }

        const expectedState = {
            recipes: null,
            isLoading: false,
            error: [{'name': 'banana'}]
        }

        expect(search(previousState, action)).toEqual(expectedState)
    })
})

