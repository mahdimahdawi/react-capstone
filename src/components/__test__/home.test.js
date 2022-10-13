import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/cinfigureStore';
import HomePage from '../pages/home';

test('Render <HomePage /> component', () => {
  const comp = renderer.create(
    <Provider store={store}>
      <HomePage />
    </Provider>
  ).toJSON();
  expect(comp).toMatchSnapshot();
})