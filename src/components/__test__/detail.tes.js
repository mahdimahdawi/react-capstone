import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/cinfigureStore';
import DetailPage from '../pages/details';

test('Render <DetailPage /> component', () => {
  const comp = renderer.create(
    <Provider store={store}>
      <DetailPage />
    </Provider>,
  ).toJSON();
  expect(comp).toMatchSnapshot();
});
