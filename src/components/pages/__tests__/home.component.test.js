import ReactTestRenderer from 'react-test-renderer';
import {Home} from "../home.component";

describe("Home Component", () => {
    test('Should be rendered correct', () => {
        const renderer = ReactTestRenderer.create(<Home/>);
        const instance = renderer.root;
        expect(instance.findByType('h1').children).toEqual(['Home Page']);
    })
});
