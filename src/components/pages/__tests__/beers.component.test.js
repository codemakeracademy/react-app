import ReactTestRenderer from 'react-test-renderer';
import {BeerListItem, Beers} from "../beers.component";

jest.mock("react-router-dom", () => {
    return {
        Link: ({children, to}) => <a href={to}>{children}</a>
    }
})

jest.mock('../../../services/beers.service', () => {
    return {
        getBeers: (query) => {
            switch(query) {
                case '1':
                    return Promise.resolve([{id: 1, name: 'Baltica'}])
            }
            return Promise.resolve([])
        }
    }
})

describe("Beers Component", () => {
    test("Should be rendered for no data", () => {
        const historyMock = {
            push: jest.fn()
        }
        const locationMock = {
            query: ''
        }
        const renderer = ReactTestRenderer.create(<Beers history={historyMock} location={locationMock}/>);
        const instance = renderer.root;
        expect(instance.findByType('h2').children).toEqual(['Loading...']);
        setTimeout(() => {
            expect(instance.findByType('h2').children).toEqual(['No Beers']);
        }, 0);
    })

    test("Should be rendered one Beer", () => {
        const historyMock = {
            push: jest.fn()
        }
        const locationMock = {
            query: 'query=1'
        }
        const renderer = ReactTestRenderer.create(<Beers history={historyMock} location={locationMock}/>);
        const instance = renderer.root;
        expect(instance.findByType('h2').children).toEqual(['Loading...']);
        setTimeout(() => {
            expect(instance.findAllByType(BeerListItem).length).toBe(1);
        }, 0);
    })

    test("Should search works correct", () => {
        const historyMock = {
            push: jest.fn()
        }
        const locationMock = {
            query: 'query=1'
        }
        const renderer = ReactTestRenderer.create(<Beers history={historyMock} location={locationMock}/>);
        const instance = renderer.root;
        const input = instance.findByType('input');
        input.props.onChange({target: {value: '123'}});
        expect(historyMock.push).toBeCalledWith('/beers?query=123');
    });

    test('Sould Beer Item Component rendered correct', () => {
        const renderer = ReactTestRenderer.create(<BeerListItem beer={{id: 2, name: 'Bud'}} />);
        const instance = renderer.root;
        expect(instance.findByType('a').children).toEqual(['Bud']);
        expect(instance.findByType('a').props.href).toBe('/beers/2');
    });
})
