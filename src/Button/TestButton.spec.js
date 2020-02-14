import renderer from 'react-test-renderer';
import { TestButton } from './TestButton';

describe('Button', () => {
it('returns a react component', () => {
    expect(typeof TestButton).toBe('function');
});

it('renders correctly', () => {
    const tree = renderer.create('<TestButton>Success</TestButton>').toJSON();
    expect(tree).toMatchSnapshot();
});
});