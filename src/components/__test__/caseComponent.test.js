import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import CaseComponent from '../caseComponent';
import store from '../../redux/cinfigureStore';

test('Render <CaseComponet /> component', () => {
  const comp = renderer.create(
    <Provider store={store}>
      <CaseComponent cases={[]} value={[]} />
    </Provider>,
  ).toJSON();
  expect(comp).toMatchSnapshot();
});
