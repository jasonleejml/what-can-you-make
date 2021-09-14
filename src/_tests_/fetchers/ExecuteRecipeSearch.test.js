import { executeRecipeSearch } from "../../actions";

// this is where we mock 'fetch'
const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([])
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe('executeRecipeSearch', () => {
    test('executeRecipeSearch fetches correctly', async () => {
        const json = await executeRecipeSearch()
        expect(Array.isArray(json)).toEqual(true)
        expect(json.length).toEqual(0)
    })
})