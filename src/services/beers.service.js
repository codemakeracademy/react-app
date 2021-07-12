export function getBeers (query) {
    const url = query
        ? `https://api.punkapi.com/v2/beers?beer_name=${query}`
        : `https://api.punkapi.com/v2/beers`
    return fetch(url).then(result => {
        return result.json();
    })
}
