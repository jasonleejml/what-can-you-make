import recipe from "../../reducers/recipe";
import { GET_RECIPE, RECEIVE_RECIPE, FAIL_RECIPE } from "../../actions/recipe";

const initialState = {
    recipe: null,
    isFetching: false,
    error: null
}

describe("Recipe Reducers", () => {
    test('should return initial state when type is incorrect', () => {
        expect(recipe(initialState, {type:'DUMMY_ACTION'})).toEqual(initialState)
    })

    test('should return expected state for fetching recipe', () => {
        const action = {
            type: GET_RECIPE,
            payload: null
        }

        const expectedState = {
            recipe: null,
            isFetching: true,
            error: null
        }

        expect(recipe(initialState, action)).toEqual(expectedState)
    })

    test('should return expected state for fetched recipe', () => {
        const action = {
            type: RECEIVE_RECIPE,
            payload: [{'name': 'banana'}]
        }

        const previousState = {
            recipe: [{'name': 'apple'}],
            isFetching: false,
            error: null
        }

        const expectedState = {
            recipe: [{'name': 'banana'}],
            isFetching: false,
            error: null
        }

        expect(recipe(previousState, action)).toEqual(expectedState)
    })

    test('should return expected state for failed fetch of recipe', () => {
        const action = {
            type: FAIL_RECIPE,
            payload: 'Error'
        }

        const previousState = {
            recipe: [{'name': 'banana'}],
            isFetching: false,
            error: null
        }

        const expectedState = {
            recipe: [{'name': 'banana'}],
            isFetching: false,
            error: 'Error'
        }

        expect(recipe(previousState, action)).toEqual(expectedState)
    })
})