import {getBeers} from "../beers.service";

const fetchMock = require('fetch-mock-jest');

describe("Beer Service", () => {
    test("Should be called with correct url", async () => {
        fetchMock
            .get('https://api.punkapi.com/v2/beers', {query: ''})
            .get('https://api.punkapi.com/v2/beers?beer_name=123', {query: '123'});


        const beers = await getBeers();
        expect(beers).toStrictEqual({query: ''});
        const beers1 = await getBeers('123');
        expect(beers1).toStrictEqual({query: '123'});
    });
});
