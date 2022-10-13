import renderer from "react-test-renderer";
import CountryInformation from "../countryInformation";
import { Provider } from "react-redux";
import store from "../../redux/cinfigureStore";

test("Render <CountryInfromation /> Component", () => {
  const comp = renderer
    .create(
      <Provider store={store}>
        <CountryInformation />
      </Provider>
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});
