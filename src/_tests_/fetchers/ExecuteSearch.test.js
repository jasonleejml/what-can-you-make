import { executeSearch} from "../../actions";

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

describe('executeSearch', () => {
    test('executeSearch fetches correctly', async () => {
        const json = await executeSearch()
        expect(Array.isArray(json)).toEqual(true)
        expect(json.length).toEqual(0)
    })
})